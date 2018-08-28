import React from "react";
import KkList from './KkList';
import { toggleMenu } from '../utils';
import "../css/kks.css";

export default function Kks(props) {
  return (
    <div className="kk-container">
      <button className="expand-menu" onClick={toggleMenu}>
        <i class="fas fa-bars" />
      </button>
      <KkList />
      <div className="kk-button-container">
        <button className="kk-button">Pick your KK</button>
      </div>
    </div>
  );
}
