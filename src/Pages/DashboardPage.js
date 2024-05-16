import React, { useEffect, useState } from 'react';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import Dashboard from '../Components/Dashboard';
import { getCoins } from '../Functions/getCoins';


function DashboardPage() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    getCoins(setData)
  },[])
  return (
    <div>
        <Header/>
        <Dashboard data={data} setData={setData}/>
        <Footer/>
    </div>
  )
}

export default DashboardPage