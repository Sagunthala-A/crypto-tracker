import React, { useEffect, useState } from "react";
import { get100Coins } from "../Functions/get100Coins";
import ApiRejected from "../Components/Common/ApiRejected";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Loader from "../Components/Common/Loader";
import Button from "../Components/Common/Button";
import TabsComponent from "../Components/Dashboard/TabsComponent/TabsComponent";

function WatchlistPage() {
  const[allCoins,setAllCoins] = useState([]);
  // const [coins, setCoins] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [watch, setWatch] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const[filteringCoins, setFilteringCoins] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filteredCoins = allCoins.filter((coin) => watch.includes(coin.id));
    setFilteringCoins(filteredCoins);
  },[watch]);

  async function getData() {
    setIsLoading(true);
    const allCoins = await get100Coins(setError); // Assuming get100Coins fetches 100 coins
    if (allCoins) {
      setAllCoins(allCoins);
      const filteredCoins = allCoins.filter((coin) =>
        watch.includes(coin.id)
      );
      setFilteringCoins(filteredCoins);
      
    }
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : error.length > 0 ? (
        <ApiRejected error={error} />
      ) : filteringCoins.length > 0 ? (
        <div>
          <TabsComponent
            data={filteringCoins}
            setWatch={setWatch}
          />
        </div>
      ) : (
        <div className="watchlist__page">
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Button text="Dashboard" linkTo={"/dashboard"} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default WatchlistPage;
