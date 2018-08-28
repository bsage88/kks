import React from "react";
import _ from "lodash";
import KkName from "./KkName";
import { toggleMenu } from "../utils";
import { profilePictures } from "../constants";
import '../css/kkList.css';

function getNameList() {
  return _.map(profilePictures, (value, key) => (
    <KkName name={key} picture={value} />
  ));
}

export default function Kks(props) {
  return (
    <div id="kkListContainer" className="kk-list-container">
      <div className="kk-list-header">
        <label>Participants</label>
        <button className="expand-menu" onClick={toggleMenu}>
          <i class="fas fa-arrow-left" />
        </button>
      </div>
      <div className="kk-list">{getNameList()}</div>
    </div>
  );
}
