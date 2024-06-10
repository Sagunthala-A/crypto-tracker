import React, { useEffect, useState } from 'react'
import { get100Coins } from '../Functions/get100Coins';
import ApiRejected from '../Components/Common/ApiRejected';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import Loader from '../Components/Common/Loader';

function WatchlistPage() {
    const [watchlist,setWatchlist] = useState([]);
    const starredCoins = localStorage.getItem('watchlist');
    const [error,setError] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        getData();
    },[])

    async function getData() {
        setIsLoading(true);
        const allCoins = await get100Coins(setError);
        if (allCoins) {
          setWatchlist(allCoins.filter((coin) => starredCoins.includes(coin.id)));
        }
        setIsLoading(false);
    }

  return (
    <>
        {
           error.length > 0 ? (
            <ApiRejected error={error} />
          ) :(
            <>
                <Header/>
                    {
                        isLoading ? (<Loader/>):(
                            <>

                            </>
                        )
                    }
                <Footer/>
            </>
          )
        }
    </>
  )
}

export default WatchlistPage