import React from 'react';
import { toggleMenu, getNameList } from '../utils';
import '../css/kkList.css';

export default function KkList(props) {
  return (
    <div id="kkListContainer" className="kk-list-container">
      <div className="kk-list-header">
        <label>Participants</label>
        <button className="expand-menu" onClick={toggleMenu}>
          <i className="fas fa-arrow-left" />
        </button>
      </div>
      <div className="kk-list">{getNameList()}</div>
    </div>
  );
}
