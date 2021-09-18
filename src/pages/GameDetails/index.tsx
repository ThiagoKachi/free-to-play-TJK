import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';

import { GameByIdContext } from '../../context/GameByIdProvider';

import logoutImg from '../../assets/logout.png';
import infoImg from '../../assets/info.png';

import './styles.scss';

export function GameDetails() {
  const { gameDetails, isLoading } = useContext(GameByIdContext);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <img src={gameDetails.screenshots[0].image} alt="Background image" />
      <div className="content">
        <div className="left-content">
          <img src={gameDetails.thumbnail} alt="Game image" />
          <div className="play-now">
            <span>Grátis</span>
            <Link to={gameDetails.game_url}>
              Jogue Agora
              <img src={logoutImg} alt="log out" />
            </Link>
          </div>
          <span className="status">{gameDetails.status}</span>
        </div>
        <div className="right-content">
          <h1>{gameDetails.title}</h1>
          <h2>Sobre {gameDetails.title}</h2>
          <p>{gameDetails.description}</p>
          <h3>Informações Adicionais</h3>
          <p>
            <img src={infoImg} alt="info" />
            Observe que este jogo grátis pode ou não oferecer compras opcionais
            no jogo.
          </p>
          <span></span>
          <div className="additional-infos">
            <span>
              Título
              {gameDetails.title}
            </span>
            <span>
              Desenvolvedor
              {gameDetails.developer}
            </span>
            <span>
              Publisher
              {gameDetails.publisher}
            </span>
            <span>
              Data de lançamento
              {gameDetails.release_date}
            </span>
            <span>
              Gênero
              {gameDetails.genre}
            </span>
            <span>
              Plataforma
              {gameDetails.platform}
            </span>
          </div>
          <h2>{gameDetails.title} Images</h2>
          <div className="game-images">
            <img src={gameDetails.screenshots[0].image} alt="image 1" />
            <img src={gameDetails.screenshots[1].image} alt="image 2" />
            <img src={gameDetails.screenshots[2].image} alt="image 3" />
          </div>
          <h2>Requisitos Mínimos do Sistema (Windows)</h2>
          <span></span>
          <div className="requirements-system">
            <span>
              OS
              {gameDetails.minimum_system_requirements.os}
            </span>
            <span>
              Processador
              {gameDetails.minimum_system_requirements.processor}
            </span>
            <span>
              Memória
              {gameDetails.minimum_system_requirements.memory}
            </span>
            <span>
              Gráficos
              {gameDetails.minimum_system_requirements.graphics}
            </span>
            <span>
              Armazenamento
              {gameDetails.minimum_system_requirements.memory}
            </span>
            <span>
              Notas Adicionais <br /> As especificações podem mudar durante o
              desenvolvimento.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
