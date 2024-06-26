import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.js';
import DashboardPage from './Pages/DashboardPage.js';
import CoinPage from './Pages/CoinPage.js';
import ComparePage from './Pages/ComparePage.js';
import WatchlistPage from './Pages/WatchlistPage.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
