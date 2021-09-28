import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import errorImg from '../../assets/errorImg.png';

export function NotFound() {
  return (
    <div className="page-not-found">
      <img src={errorImg} alt="Page not found" />
      <Link to="/">Voltar a Home</Link>
    </div>
  );
}
