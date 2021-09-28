import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

type DescriptionProps = {
  buttonTitle: string;
  pageDescription: ReactNode;
  changeImage: string;
  linkTo: string;
};

export function Description({
  buttonTitle,
  pageDescription,
  changeImage,
  linkTo,
}: DescriptionProps) {
  return (
    <section className={changeImage}>
      <div className="infos">
        <h1 className="title">Encontre e acompanhe {pageDescription}</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
          eius!Lorem ipsum dolor sit amet, consectetur.
        </p>
        <div className="or-styles">
          <span></span>
          <p>ou</p>
          <span></span>
        </div>
        <Link className="search-button" to={linkTo}>
          {buttonTitle}
        </Link>
      </div>
    </section>
  );
}
