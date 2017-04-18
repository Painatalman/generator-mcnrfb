import React, { Component } from 'react';
import styles from './FortuneCookie.css';

export default function FortuneCookie(props) {
  return (
    <div className="fortune-cookie">
      <select className="fortune-cookie__language-selector" onChange={props.onChangeLanguage} value={props.language}>
        {props.languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
      </select>
      <div className="fortune-cookie__quote">{props.quote}</div>
      <button className="fortune-cookie__button" onClick={props.onChangeQuote}>Change</button>
    </div>
  );
}
