/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useState } from 'react';
import { useHistory } from 'react-router';

import { getGameById } from '../services';

type GameByIdContextType = {
  gameById: (id: number) => Promise<any>;
  getGameDetails: (id: number) => Promise<any>;
  gameDetails: {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    minimum_system_requirements: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    screenshots: {
      id: number;
      image: string;
    }[];
  };
};

type GameByIdContextProviderProps = {
  children: ReactNode;
};

export const GameByIdContext = createContext({} as GameByIdContextType);

export function GameByIdProvider(props: GameByIdContextProviderProps) {
  const [gameDetails, setGameDetails] = useState<any>();

  const history = useHistory();

  async function gameById(id: number) {
    const getGamesListFromApi: any = await getGameById(id);
    setGameDetails(getGamesListFromApi);
    history.push(`/${id}`);
  }

  async function getGameDetails(id: number) {
    const getGamesListFromApi: any = await getGameById(id);
    setGameDetails(getGamesListFromApi);
  }

  const infosToShare = {
    gameDetails,
    gameById,
    getGameDetails,
  };

  return (
    <GameByIdContext.Provider value={infosToShare}>
      {props.children}
    </GameByIdContext.Provider>
  );
}
