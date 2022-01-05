import React, { useState, useEffect } from "react";
import close from "./sample/posts/close.svg";
import fire from "./sample/posts/fire.svg";
import profileImg from "./sample/posts/profile2.png";
import testImg from "./sample/posts/viewArt.jpeg";
import comment from "./sample/posts/message-circle.svg";
import "./ViewPage.css";

function ViewPage() {
  const [seeComments, setSeeComments] = useState(false);

function setCommVis() {
  let value = seeComments ? 'block' : 'none';
  document.querySelector(".right").style.display = value;
}

useEffect( () => {
  setCommVis()
}, [seeComments])

  return (
    <div id="ViewPage">
      <img id="close" src={close} />
      <div id="modal">
        <div className="left">
          <div className="centered">
            <img id="artView" src={testImg} />
            <div id="titleLn">
            <img src={fire} alt="fire icon" id="like" />
              <div id="artTitle">JungleCity</div>
              <img src={comment} alt="comment icon" id="commentIcon" onClick={() => setSeeComments(seeComments => !seeComments)} />
            </div>
            <div id="description">
              Lucious greens and blues drawn in Procreate.
            </div>
            <div id="priceAndBuy">
              <div id="price">$740</div>
              <button id="buyBtn">Buy</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div id="commentSec">
          <div className="comment">
            <div className="profileImgDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
            </div>
            <div className="commentText">
              <span className="name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
