import React, { useState } from 'react';
import './style.css';

function CoinInfo ({coinData}) {
    const [flag,setFlag] = useState(true);

     const smallDesc =
       coinData.desc.length > 400
         ? coinData.desc.slice(0, 400) +
           "<p style='color:var(--grey); cursor:pointer;'>Read More...</p>"
         : coinData.desc;

     const fullDesc =
       coinData.desc.length > 400
         ? coinData.desc +
           "<p style='color:var(--grey);cursor:pointer;'>Read Less...</p>"
         : coinData.desc;

  return (
    <>
        <h2 className='coinInfo__heading'>{coinData.name}</h2>
        {
            coinData.desc.length > 300 ? (
                <p
                    className="content__container"
                    onClick={()=>{
                        setFlag(!flag)
                    }}
                    dangerouslySetInnerHTML={{ __html: flag? fullDesc: smallDesc }}
                />)
                :(
                <p dangerouslySetInnerHTML={{__html: coinData.desc}}/>
            )
        }
    </>
  )
}

export default CoinInfo;
