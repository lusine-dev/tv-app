import React, { useState } from 'react';
import data from './data.json';

export const DataContext = React.createContext(null);

export const DataProvider = ({ children }) => {
  const [featured, setFeatured] = useState(data.Featured);
  const [trendingNow, setTrendingNow] = useState(data.TendingNow);

  return (
    <DataContext.Provider value={{featured, setFeatured, trendingNow, setTrendingNow }}>
      {children}
    </DataContext.Provider>
  );
};
