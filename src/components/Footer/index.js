import React from 'react';
import './styles.css';
import Toten from '../../assets/toten.svg';

export default function Footer(props) {
  return (
    <div className="footer-container">
      <img src={Toten} />
      <p className="footer-title">@pablohariel</p>
    </div>
  )
}