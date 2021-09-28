/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Footer } from '../../components/Footer';

import { GameByIdContext } from '../../context/GameByIdProvider';

import logoutImg from '../../assets/logout.png';
import infoImg from '../../assets/info.png';
import userCountImg from '../../assets/user-count.png';
import windowsImg from '../../assets/windows.png';

import './styles.scss';

export function GameDetails() {
  const { gameDetails, getGameDetails } = useContext(GameByIdContext);

  const { gameid } = useParams<any>();

  useEffect(() => {
    getGameDetails(Number(gameid));
  }, [gameid, getGameDetails]);

  return gameDetails !== undefined ? (
    <>
      <Header />
      <div className="content">
        <div className="left-content">
          <img src={gameDetails.thumbnail} alt="Game image" />
          <div className="play-now">
            <span>Grátis</span>
            <a href={gameDetails.game_url}>
              Jogue Agora
              <img src={logoutImg} alt="log out" />
            </a>
          </div>
          <div className="status-count-require">
            <div className="status">
              <div
                className={
                  gameDetails.status === 'Live'
                    ? 'circle-live'
                    : 'circle-not-live'
                }
              ></div>
              <span className="game-status">{gameDetails.status}</span>
            </div>
            <span className="count-require">
              <img src={userCountImg} alt="User" />
              Requer conta de terceiros
            </span>
          </div>
        </div>
        <div className="right-content">
          <h1 className="game-title">{gameDetails.title}</h1>
          <h2 className="about-game">Sobre {gameDetails.title}</h2>
          <p className="game-description">{gameDetails.description}</p>
          <h3 className="game-infos">Informações Adicionais</h3>
          <p className="game-shop-info">
            <img src={infoImg} alt="info" />
            Observe que este jogo grátis pode ou não oferecer compras opcionais
            no jogo.
          </p>
          <hr />
          <div className="additional-infos">
            <span>
              <p>Título</p>
              {gameDetails.title}
            </span>
            <span>
              <p>Desenvolvedor</p>
              {gameDetails.developer}
            </span>
            <span>
              <p>Publisher</p>
              {gameDetails.publisher}
            </span>
            <span>
              <p>Data de lançamento</p>
              {gameDetails.release_date}
            </span>
            <span>
              <p>Gênero</p>
              {gameDetails.genre}
            </span>
            <span className="game-platform">
              <p>Plataforma</p>
              {gameDetails.platform === 'Windows' ? (
                <span>
                  <img
                    src={windowsImg}
                    alt="Windows"
                    className="windows-image"
                  />
                  {gameDetails.platform}
                </span>
              ) : (
                <span>All Platforms</span>
              )}
            </span>
          </div>
          <h2 className="game-images-title">{gameDetails.title} Screenshots</h2>
          <div className="game-images">
            {gameDetails.screenshots.map(({ image }) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img key={image} src={image} alt="image 3" />
              </a>
            ))}
          </div>
          <h2 className="min-reqs">
            Requisitos Mínimos do Sistema <span>(Windows)</span>
          </h2>
          <hr />
          <div className="requirements-system">
            <span>
              <p>OS</p>
              {gameDetails.minimum_system_requirements.os}
            </span>
            <span>
              <p>Processador</p>
              {gameDetails.minimum_system_requirements.processor}
            </span>
            <span>
              <p>Memória</p>
              {gameDetails.minimum_system_requirements.memory}
            </span>
            <span>
              <p>Gráficos</p>
              {gameDetails.minimum_system_requirements.graphics}
            </span>
            <span>
              <p>Armazenamento</p>
              {gameDetails.minimum_system_requirements.memory}
            </span>
            <span>
              <p>Notas Adicionais</p>
              As especificações podem mudar durante o desenvolvimento.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}
