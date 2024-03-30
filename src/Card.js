import React, { useState } from "react";
import { changeFontColor, changeBg, changeTitle, toggle } from "./Store";
import { useDispatch, useSelector } from "react-redux";
export default function Card() {
  const [color, setColor] = useState("#fff");
  const [bgColor, setBgColor] = useState("#ggg");

  const [userName, setUserName] = useState("ayda");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.page);

  return (
    <div className="container">
      <div
        className={selector.navVisibility ? "nav" : "nav hide"}
        style={{ backgroundColor: selector.backGroundColor }}
      >
        <h1 style={{ color: selector.fontColor }}>{userName}</h1>
        <button
          className="close"
          onClick={() =>
            dispatch(toggle({ navVisibility: !selector.navVisibility }))
          }
        >
          x
        </button>
      </div>
      <div className="btns">
        <div className="colorcon">
          <label for="favcolor">Select your favorite color:</label>
          <input
            type="color"
            className="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => dispatch(changeFontColor({ fontColor: color }))}
          >
            submit
          </button>
        </div>
        <div className="bgColor">
          <label for="favcolor">Select your bg color:</label>
          <input
            type="color"
            className="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => dispatch(changeBg({ backGroundColor: bgColor }))}
          >
            submit
          </button>
        </div>

        <div className="username">
          <input
            type="text"
            className="input"
            placeholder="enter your name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => dispatch(changeTitle({ title: userName }))}
          >
            send
          </button>
        </div>

        <button
          className="btn"
          onClick={() =>
            dispatch(toggle({ navVisibility: !selector.navVisibility }))
          }
        >
          toggle
        </button>
      </div>
    </div>
  );
}
