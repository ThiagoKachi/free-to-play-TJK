/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { getGameList } from '../services';

type AppContextType = {
  isLoading: boolean;
  gameList: {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
  }[];
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext({} as AppContextType);

export function AppProvider(props: AppContextProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    async function getGamesList() {
      setIsLoading(true);
      const getGamesListFromApi: any = await getGameList();
      setGameList(getGamesListFromApi);
      setIsLoading(false);
    }

    getGamesList();
  }, []);

  const infosToShare = { isLoading, gameList };

  return (
    <AppContext.Provider value={infosToShare}>
      {props.children}
    </AppContext.Provider>
  );
}
