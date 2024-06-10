import React,{useState,useEffect} from 'react'
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import SelectCoin from '../Components/Compare/SelectCoin';
import SelectDays from '../Components/Coin/SelectDays';
import { get100Coins } from './../Functions/get100Coins';
import Loader from '../Components/Common/Loader';
import { getCoinData } from '../Functions/getCoinData';
import { getCoinPrices } from '../Functions/getCoinPrices';
import LineChart from '../Components/Coin/LineChart';
import PriceTypeToggle from '../Components/Coin/PriceTypeToggle';

function ComparePage() {
    const [coin1,setCoin1] = useState("bitcoin");
    const [coin2, setCoin2] = useState("ethereum");
    const [allCoins,setAllCoins] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [days,setDays] = useState(120)
    const [coin1Data,setCoin1Data] = useState([]);
    const [coin2Data,setCoin2Data] = useState([]);
    // const [coinData,setCoinData] = useState([]);
    const [priceType,setPriceType] = useState('prices')

    useEffect(() => {
        getData();
    },[])

    async function getData() {
        const data = await get100Coins();
        if(data){
            setAllCoins(data);
        }
        const cryptoData1 = await getCoinPrices(coin1, days,priceType);
        const cryptoData2 = await getCoinPrices(coin2, days,priceType);
        if(cryptoData1 && cryptoData2){
            setCoin1Data(cryptoData1);
            setCoin2Data(cryptoData2);
        }
        setIsLoading(false);
    }

    async function handleCoinChange(event,isCoin2) {
        setIsLoading(true);
        if (isCoin2) {
            setCoin2(event.target.value);
            const data = await getCoinData(event.target.value,setCoin2Data,setIsLoading);
            const cryptoData2 = await getCoinPrices(
              event.target.value,
              days,
              priceType
            );
            if(data){
                setCoin2Data(data);
            }
            if(cryptoData2){
                setCoin2Data(cryptoData2);
            }
        }
        if(!isCoin2){
            setCoin1(event.target.value);
            const cryptoData1 = await getCoinPrices(
              event.target.value,
              days,
              priceType
            );
            if(cryptoData1){
                setCoin1Data(cryptoData1);
            }
        }
        setIsLoading(false);
        }

    async function handleDaysChange(event){
        setIsLoading(true);
        setDays(event.target.value);
        const cryptoData1 = await getCoinPrices(coin1,event.target.value,priceType);
        const cryptoData2 = await getCoinPrices(coin2,event.target.value,priceType);
        if(cryptoData1 && cryptoData2){
            setCoin1Data(cryptoData1);
            setCoin2Data(cryptoData2);
        }
        setIsLoading(false);
    }

    async function handlePriceTypeToggle(event){
        setIsLoading(true);
        setPriceType(event.target.value);
        const cryptoData1 = await getCoinPrices(coin1, days, event.target.value);
        const cryptoData2 = await getCoinPrices(coin2, days, event.target.value);
        if(cryptoData1 && cryptoData2){
            setCoin1Data(cryptoData1);
            setCoin2Data(cryptoData2);
        }
        setIsLoading(false);
    }

  return (
    <>
      <Header />
      {isLoading || !coin1Data || !coin2Data ? (
        <Loader />
      ) : (
        <div className="coin__listWrapper lineChart__wrapper">
        
          <div className="comparePage__select">
            <SelectCoin
              coin1={coin1}
              coin2={coin2}
              allCoins={allCoins}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
            <PriceTypeToggle
              priceType={priceType}
              handlePriceTypeToggle={handlePriceTypeToggle}
            />
            {coin1Data && coin2Data && (
              <LineChart
                chartData={coin1Data}
                priceType={priceType}
                multiAxis={true}
                chartData2={coin2Data}
              />
            )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default ComparePage;