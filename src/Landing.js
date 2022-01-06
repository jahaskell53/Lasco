import { clear } from '@testing-library/user-event/dist/clear';
import React, {useEffect, useState} from 'react'
import "./Landing.css"
import demoLandingBelt from "./sample/posts/Demo-Landing-Belt.png"
import demoLogo from "./sample/posts/demo-logo.png";


function Landing() {
    
    var belt;
    var scrollInterval;

    function moveBeltLeft() {
        belt.style.left = parseInt(belt.style.left) + 1 + "px";
    }

    function moveBeltRight() {
        belt.style.left = parseInt(belt.style.left) - 1 + "px";
    }
    
    useEffect(() => {
        belt = document.querySelector('#belt-div');
        repeatWhileMouseOver(document.querySelector('#scroll-left-div'), moveBeltLeft, 1);
        repeatWhileMouseOver(document.querySelector('#scroll-right-div'), moveBeltRight, 1);
        scrolling(moveBeltRight, 10);
    }, [])

    function repeatWhileMouseOver(element, action, milliseconds) {
        var interval = null;
        element.addEventListener('mouseover', function () {
            interval = setInterval(action, milliseconds);
            clearInterval(scrollInterval)
        });
    
        element.addEventListener('mouseout', function () {
            clearInterval(interval);
            scrolling(moveBeltRight, 10)
        });
    }
    function scrolling(action, milliseconds) {
            scrollInterval = setInterval(action, milliseconds);
    }
    console.log(window.innerWidth)
    console.log(`${-4804 + 0.5 * window.innerWidth}px`);
    return (<>
        <div id="Landing">
            <div id="intro-text">So you're curious about <span className="text-gradient"> NFTs</span> ?</div>
            <div id="belt-div"  style={{left: '50%', transform: 'translate(-50%)' }}>
                <img id="belt" src={demoLandingBelt}></img>
                <img id="belt" src={demoLandingBelt}></img>
                <img id="belt" src={demoLandingBelt}></img>
            </div>
            <div id="scroll-left-div"></div>
            <div id="scroll-right-div"></div>
            <div id="button-div"> 
                <a href="/login">
                    <button className="login-signup" id="login-button"><div className="text-gradient">Login</div></button>
                </a>
                <a href="/signup">
                    <button className="login-signup" id="signup-button"><div className="text-white">Signup</div></button>
                </a>
            </div>
            <div id="logo-div">
                <img src={demoLogo}></img>
                <div>Lasco</div>
            </div>
        </div>
    </>)
}

export default Landing