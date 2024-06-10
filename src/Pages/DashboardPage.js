import React, { useEffect, useState } from 'react';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import Dashboard from '../Components/Dashboard';
import { get100Coins } from '../Functions/get100Coins';
import Search from '../Components/Dashboard/Search';
import Loader from '../Components/Common/Loader';
import BackToTop from '../Components/Common/BackToTop';
import PaginationComponent from '../Components/Dashboard/PaginationComponent';
import ApiRejected from '../Components/Common/ApiRejected';

function DashboardPage() {
  const [data,setData] = useState([]);
  const [error,setError] = useState('');
  const [search,setSearch] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [priceType, setPriceType] = useState('prices');

  const handlePageChange = (event, value) => {
    setPage(value);
    var startingIndex = (value - 1) * 10;
    setPaginatedCoins(data.slice(startingIndex, startingIndex + 10));
  };

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    const data = await get100Coins(
      setData,
      setError,
      setIsLoading,
      setPaginatedCoins
    );
    if(data){
      setData(data);
      setIsLoading(false);
      setPaginatedCoins(data.slice(0, 10));
    }
  }

   const filteredData = data.length>0 && data.filter((coin)=>
      (coin.name).toLowerCase().includes(search.toLowerCase()) ||
      (coin.symbol).toLowerCase().includes(search.toLowerCase())
    )

  function onSearchChange(e){
    setSearch(e.target.value)
  }
  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        // if promise is pending
        <Loader />
      ) : (
        <>
          {/* if promise is rejected */}
          {error.length > 0 ? (
            <ApiRejected error={error} />
          ) : (
            <>
              {data && (
                <div>
                  {/* if promise is resolved */}
                  <Search search={search} onSearchChange={onSearchChange} />
                  <Dashboard
                    data={search ? filteredData : paginatedCoins}
                    setSearch={setSearch}
                  />
                  {/* if there is no search then process pagination component*/}
                  {!search && (
                    <PaginationComponent
                      page={page}
                      handlePageChange={handlePageChange}
                    />
                  )}
                </div>
              )}
              </>
          )}
          <Footer />
        </>
      )}
    </>
  );
}
export default DashboardPage;