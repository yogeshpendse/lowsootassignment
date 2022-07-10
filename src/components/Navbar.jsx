import React from "react";
import { useDash } from "../context/Dashcontext";
import "../styles/styles.css";

export function Navbar() {
  const { state, dispatch } = useDash();
  function handleviewtoggle() {
    dispatch({ type: "toggleview" });
  }
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logocontainer">
          <img
            className="navbar__logo"
            src="https://cdn1.databox.com/images/logo/databox-big-1024.png"
            alt="navbar logo"
          />
        </div>
        <div className="navbar__leftcontrols">
          <p className="navbar__leftcontrolname">
            <i className="bi bi-circle-fill navbar__dotcolor" />
            Engagement Overview
          </p>
          <p>
            <i className="bi bi-lightning-charge-fill navbar__flashcolor" />
          </p>
        </div>
        <button className="navbar__plus">
          <span>+</span>
        </button>
      </div>
      <div className="navbar__mid">
        <p className="navbar__midlogo">
          <i className="bi bi-phone" />
        </p>
        <button
          onClick={() => handleviewtoggle()}
          className={
            state.sview
              ? "navbar__midtoggle navbar__midtoggle--desktop"
              : "navbar__midtoggle navbar__midtoggle--mobile"
          }
        >
          <span>
            <i className="bi bi-circle-fill" />
          </span>
        </button>
        <p className="navbar__midlogo">
          <i className="bi bi-pc-display-horizontal" />
        </p>
        <div className="navbar__slide">
          <label className="navbar__slidelabel" htmlFor="volume">
            100%
          </label>
          <div className="navbar__slidebar">
            <span>-</span>
            <input
              type="range"
              id="volume"
              defaultValue={2}
              name="volume"
              min={0}
              className="navbar__slidebarinput"
              max={10}
            />
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbarright__alert">
          <i className="bi bi-exclamation-triangle-fill" />
          <div className="navbarright__alertdot">
            <p>1</p>
          </div>
        </div>
        <p className="navbarright__autosaved">
          <i className="bi bi-check-circle-fill" />
          <span>Action saved</span>
        </p>
        <button className="navbarright__close">
          <span>
            <i className="bi bi-x-lg" />
          </span>
        </button>
      </div>
    </nav>
  );
}
