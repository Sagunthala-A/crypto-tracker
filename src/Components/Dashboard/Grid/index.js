import React from 'react';
import './style.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function Grid({coin}) {
  return (
    <div>
        {
            coin.price_change_percentage_24h >=0 ? (
                <div className='grid__container '>
                    <div className='grid__logo'>
                        <img 
                            src={coin.image} 
                            alt={`${coin.name}_logo`}
                        />
                        <div className='grid__logoName'>
                            <h4>{coin.symbol}</h4>
                            <p>{coin.name}</p>
                        </div>

                    </div>
                    <div className='chip__flex'>
                        <p className='price__chip'> {coin.price_change_percentage_24h.toFixed(2)}%</p>
                        <div className='icon__chip'>
                            <TrendingUpRoundedIcon className=''/>
                        </div>
                    </div>

                    <div className='coin__currentPrice'>
                        <p>${coin.current_price.toLocaleString()}</p>
                    </div>
                    <div className='coin__valueContainer'>
                        <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
                        <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
                    </div>
            
                </div>
                ):(
                <div className='grid__container redGrid'>
                <div className='grid__logo'>
                    <img 
                        src={coin.image} 
                        alt={`${coin.name}_logo`}
                    />
                    <div className='grid__logoName'>
                        <h4>{coin.symbol}</h4>
                        <p>{coin.name}</p>
                    </div>

                </div>
                <div className='chip__flex '>
                    <p className='price__chip redChip'> {coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <div className='icon__chip redChip'>
                        <TrendingDownRoundedIcon />
                    </div>
                </div>

                <div className='coin__currentPrice redCurrentPrice'>
                    <p>${coin.current_price.toLocaleString()}</p>
                </div>
                <div className='coin__valueContainer'>
                    <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
                    <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
                </div>
            
            </div>
            )
        }
    </div>
  

    // <div className='grid__container'>
    //     <div className='grid__logo'>
    //         <img 
    //             src={coin.image} 
    //             alt={`${coin.name}_logo`}
    //         />
    //         <div className='grid__logoName'>
    //             <h4>{coin.symbol}</h4>
    //             <p>{coin.name}</p>
    //         </div>

    //     </div>
    //     <div className='chip__flex'>
    //         <p className='price__chip'> {coin.price_change_percentage_24h.toFixed(2)}%</p>
    //         <div className='icon__chip'>
    //             <TrendingUpRoundedIcon className=''/>
    //         </div>
    //     </div>

    //     <div className='coin__currentPrice'>
    //         <p>${coin.current_price.toLocaleString()}</p>
    //     </div>
    //     <div className='coin__valueContainer'>
    //         <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
    //         <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
    //     </div>
        
    // </div>
    

  )
}

export default Grid;