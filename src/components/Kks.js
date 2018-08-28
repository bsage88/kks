import React from "react";
import KkList from "./KkList";
import Overlay from "./Overlay";
import { toggleMenu, toggleOverlay } from "../utils";
import "../css/kks.css";
import SnowFlakes from "./SnowFlakes";

export default function Kks(props) {
  return (
    <div className="kk-container">
      <div>
        <button className="expand-menu" onClick={toggleMenu}>
          <i className="fas fa-bars" />
        </button>
      </div>
      <KkList />
      <div className="kk-button-container">
        <button className="kk-button" onClick={toggleOverlay}>
          Pick your KK
        </button>
      </div>
      <Overlay name={'Monika'} />
      <SnowFlakes />
    </div>
  );
}
