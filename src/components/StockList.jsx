import { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

export const StockList = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/quote", {
          params: {
            symbol: "MSFT",
          },
        });
        console.log(response);
        if (isMounted) {
          setStock(response.data);
        }
        setStock(response.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return <div>StockList</div>;
};
