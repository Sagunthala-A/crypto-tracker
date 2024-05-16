import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.js';
import DashboardPage from './Pages/DashboardPage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
