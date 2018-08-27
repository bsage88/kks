import React from "react";
import _ from "lodash";
import KkName from "./KkName";
import { profilePictures } from "./constants";
import "./kks.css";

function getNameList() {
  return _.map(profilePictures, (value, key) => (
    <KkName name={key} picture={value} />
  ));
}

function openMenu(event) {
  event.preventDefault();
  const kkList = document.getElementById("kkList");
  kkList.classList.toggle("kk-list-visible");
}

export default function Kks(props) {
  return (
    <div className="kk-container">
      <button onClick={openMenu}>
        <i class="fas fa-bars" />
      </button>
      <div id="kkList" className="kk-list">
        <button onClick={openMenu}>
          <i class="fas fa-bars" />
        </button>
        {getNameList()}
      </div>
      <div className="kk-button-container">
        <button className="kk-button">Pick your KK</button>
      </div>
    </div>
  );
}
