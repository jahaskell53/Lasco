import './App.css';
import FeedPost from './FeedPost';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import SearchBarPage from './SearchBarPage';
import ViewPage from './ViewPage';
import Landing from './Landing';
import About from './About';
import PortalNav from './PortalNav';
import Portal from './Portal';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// We will import AuthContext.Provider which will provide us with the value object,
// i.e., the email, the signup method, etc.
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './PrivateRoute';
import Search from '@mui/icons-material/Search';
import AccountSettings from './AccountSettings';

function App() {

  const user = "johnnyrose";
  const navBarPages = []

  return (<>
      <div id="App">
        <Router>
        <AuthProvider>
          {/* https://stackoverflow.com/questions/70393557/react-routes-not-showing-when-using-routes */}
          <Routes>
            <Route path="/" element={<Landing />} />

            {/* Paths that require a PrivateRoute (i.e., are only accessible via auth) */}

            <Route element={<PrivateRoute/>}>
              <Route path="/feed" element={<Portal currentPage={FeedPost} />} />
              <Route path={`/profiles/${user}`} element={<Portal currentPage={Profile} />} />
              <Route path={`/search`} element={<Portal currentPage={SearchBarPage} />} />
              <Route path="/settings" element={<AccountSettings/>} />
            </Route>

            {/* <Route path="/feed" element={<PrivateRoute redirectLink="/login">
              <Portal currentPage={FeedPost} />
            </PrivateRoute>} />

            <Route path={`/profiles/${user}`} element={<PrivateRoute redirectLink="/login">
              <Portal currentPage={Profile} />
            </PrivateRoute>} />

            <Route path={`/search`} element={<PrivateRoute redirectLink="/login">
              <Portal currentPage={SearchBarPage} />
            </PrivateRoute>} /> */}

            <Route path="/view" element={< ViewPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/navbar" element={<PortalNav />} />
            {/* <Route path="/community" element={<Community />} />
          <Route path="/governance" element={<Governance />} /> */}
          </Routes>
          </AuthProvider>
        </Router>
      </div>
  </>);
}

export default App;
