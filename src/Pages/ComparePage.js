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
import List from '../Components/Dashboard/List';
import CoinInfo from '../Components/Coin/CoinInfo';

function ComparePage() {
    const [allCoins, setAllCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // id states
    const [coin1, setCoin1] = useState("bitcoin");
    const [coin2, setCoin2] = useState("ethereum");
    
    // data states
    const [coin1Data,setCoin1Data] = useState();
    const [coin2Data,setCoin2Data] = useState();

    // days,priceType,chartData states
    const [days, setDays] = useState(120);
    const [priceType,setPriceType] = useState('prices');
    const [chart1Data,setChart1Data] = useState([]);
    const [chart2Data, setChart2Data] = useState([]);

    useEffect(() => {
        getData();
    },[])

    async function getData() {
      setIsLoading(true);
        const data = await get100Coins();
        if(data){
          setAllCoins(data);
          setIsLoading(false);
        }
        await getCoinData(coin1, setCoin1Data, setIsLoading);
        const data2 = await getCoinData(coin2, setCoin2Data, setIsLoading);
        const cryptoData1 = await getCoinPrices(coin1, days,priceType);
        const cryptoData2 = await getCoinPrices(coin2, days,priceType);
        if(cryptoData1 && cryptoData2){
          setChart1Data(cryptoData1);
          setChart2Data(cryptoData2);
          setIsLoading(false);
        }
      // setIsLoading(false);
    }

    async function handleCoinChange(event,isCoin2) {
        setIsLoading(true);
        if (isCoin2) {
            setCoin2(event.target.value);
            const data2 = await getCoinData(event.target.value,setCoin2Data,setIsLoading);
            const cryptoData2 = await getCoinPrices(
              event.target.value,
              days,
              priceType
            );
            // if(data2){
            //     setCoin2Data(data2);
            // }
            if(cryptoData2){
              setChart2Data(cryptoData2);
            }
            setIsLoading(false);
        }
        if(!isCoin2){
            setCoin1(event.target.value);
            const data1 = await getCoinData(
              event.target.value,
              setCoin1Data,
              setIsLoading
            );
            const cryptoData1 = await getCoinPrices(
              event.target.value,
              days,
              priceType
            );
            // if (data1) {
            //   setCoin1Data(data1);
            // }
            if(cryptoData1){
              setChart1Data(cryptoData1);
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
          setChart1Data(cryptoData1);
          setChart2Data(cryptoData2);
          setIsLoading(false);
        }
        
    }

    async function handlePriceTypeToggle(event){
        setIsLoading(true);
        setPriceType(event.target.value);
        const cryptoData1 = await getCoinPrices(coin1, days, event.target.value);
        const cryptoData2 = await getCoinPrices(coin2, days, event.target.value);
        if(cryptoData1 && cryptoData2){
          setChart1Data(cryptoData1);
          setChart2Data(cryptoData2);
          setIsLoading(false);
        }
        
    }

  return (
    <>
      <Header />
      {isLoading || !coin1Data || !coin2Data ? (
        <Loader />
      ) : (
        <>
          <div className="coin__listWrapper">
            <List coin={coin1Data} />
          </div>
          <div className="coin__listWrapper">
            <List coin={coin2Data} />
          </div>
          {chart1Data && chart2Data && (
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

              <LineChart
                chartData={chart1Data}
                priceType={priceType}
                multiAxis={true}
                chartData2={chart2Data}
                labels={[coin1Data.name, coin2Data.name]}
              />
            </div>
          )}
          <div className="coin__listWrapper">
            <div className="coin__list">
              {coin1Data && <CoinInfo coinData={coin1Data} />}
            </div>
          </div>
          <div className="coin__listWrapper">
            <div className="coin__list">
              {coin2Data && <CoinInfo coinData={coin2Data} />}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default ComparePage;
