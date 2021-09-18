/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useState } from 'react';
import { useHistory } from 'react-router';

import { getGameById } from '../services';

type GameByIdContextType = {
  redirectToGameDetails: (id: number) => void;
  gameById: (id: number) => Promise<any>;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(false);

  async function gameById(id: number) {
    setIsLoading(true);
    const getGamesListFromApi: any = await getGameById(id);
    setGameDetails(getGamesListFromApi);
    setIsLoading(false);
  }

  const history = useHistory();

  function redirectToGameDetails(id: number) {
    history.push(`/${id}`);
  }

  const infosToShare = {
    gameDetails,
    isLoading,
    redirectToGameDetails,
    gameById,
  };

  return (
    <GameByIdContext.Provider value={infosToShare}>
      {props.children}
    </GameByIdContext.Provider>
  );
}
