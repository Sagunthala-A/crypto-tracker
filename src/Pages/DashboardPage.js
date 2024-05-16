import React, { useEffect, useState } from 'react';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import Dashboard from '../Components/Dashboard';
import { getCoins } from '../Functions/getCoins';
import Search from '../Components/Dashboard/Search';


function DashboardPage() {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState('');
  const [filterData,setFilterData] = useState([]);

  useEffect(()=>{
    getCoins(setData)
  },[])
   const filteredData = data.filter((coin)=>
      (coin.name).toLowerCase().includes(search.toLowerCase()) ||
        (coin.symbol).toLowerCase().includes(search.toLowerCase())
    )
  function onSearchChange(e){
    setSearch(e.target.value)
  }

  // useEffect(()=>{
  //   const filteredData = data.filter((coin)=>
  //     (coin.name).toLowerCase().includes(search.toLowerCase()) ||
  //       (coin.symbol).toLowerCase().includes(search.toLowerCase())
  //   )
  //   setData(filteredData);
  //   setFilterData(filteredData)
  // },[search])
  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <Dashboard data={filteredData} setSearch={setSearch} />
      <Footer />
    </div>
  );
}

export default DashboardPage