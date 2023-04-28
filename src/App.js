import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StocksList from './components/StocksList';
import StockDetails from './components/StockDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/metrics_webapp_project/" element={<StocksList />} />
          <Route path="/metrics_webapp_project/stockdetails/:symbol" element={<StockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
