import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getCoinData } from '../Functions/getCoinData';
import { convertCoinData } from "../Functions/convertCoinDataFormat";
import Header from "../Components/Common/Header";
import List from "../Components/Dashboard/List";
import Footer from "../Components/Common/Footer";
import Loader from "../Components/Common/Loader";
import CoinInfo from "../Components/Coin/CoinInfo";
import LineChart from "../Components/Coin/LineChart";
import { getCoinPrices } from "../Functions/getCoinPrices";
import SelectDays from "../Components/Coin/SelectDays";
import PriceTypeToggle from "../Components/Coin/PriceTypeToggle";

function CoinPage() {
    const {id} = useParams();
    const [coinData,setCoinData] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [days,setDays] = useState(7);
    const [chartData,setChartData] = useState([]);
    const [priceType,setPriceType] = useState("prices")

    useEffect(()=>{
        getData();
    },[id])

    async function getData (){
      setIsLoading(true);
      const data = await getCoinData(id, setCoinData,setIsLoading);
      const prices = await getCoinPrices(id, days, priceType);
      if(prices){
        setChartData(prices);
        setIsLoading(false);
      }
      
    }
      
    const handleDaysChange = async (event) => {
      setIsLoading(true);
      setDays(event.target.value);
      const prices = await getCoinPrices(id,event.target.value,priceType)
      if(prices){
        setChartData(prices);
        // settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    };

  const handlePriceTypeToggle = async(event) => {
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id,days,event.target.value);
    if(prices){
      setChartData(prices);
      // settingChartData(setChartData, prices)
      setIsLoading(false);
    }

  };

  return (
    <div>
      <Header />
      {isLoading || !coinData?.id || !chartData ? (
        <div className="coinPage__loader">
          <Loader />
        </div>
      ) : (
        <>
          {coinData &&(
              <>
                {/* {
              console.log("coin page chart data>>",chartData,"<<<<<coin page coin data>>",coinData)
            } */}
                <div className="coin__listWrapper">
                  <List coin={coinData} />
                </div>
                <div className="coin__listWrapper lineChart__wrapper">
                  <SelectDays
                    days={days}
                    handleDaysChange={handleDaysChange}
                    isPTag={true}
                  />
                  <div>
                    <PriceTypeToggle
                      priceType={priceType}
                      handlePriceTypeToggle={handlePriceTypeToggle}
                    />
                  </div>
                  <LineChart
                    chartData={chartData}
                    priceType={priceType}
                    labels={[coinData.name]}
                  />
                </div>
                <div className="coin__listWrapper">
                  <div className="coin__list">
                    {coinData && <CoinInfo coinData={coinData} />}
                  </div>
                </div>
              </>
            )}
        </>
      )}
      <Footer />
    </div>
  );
}

export default CoinPage;

// chartData={chartData} priceType={priceType}
// { chartData, priceType, multiAxis }