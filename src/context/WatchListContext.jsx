import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const watchListFromStorage = localStorage.getItem("watchList");
  const defaultWatchList = ["GOOGL", "MSFT", "AMZN"];

  const [watchList, setWatchList] = useState(
    watchListFromStorage ? watchListFromStorage.split(",") : defaultWatchList
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  };

  const deleteStock = (stock) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== stock;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
