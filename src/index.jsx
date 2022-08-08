import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './utils/style/globalStyle.css';
import Header from './components/Header';
import Home from './pages/Home'
import Characters from './pages/Characters'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Header />
    <Routes>
    <Route exact path='/' element={<Home />} />
    </Routes>
    <Routes>
    <Route exact path='/characters' element={<Characters />} />
    </Routes>
  </Router>
  </React.StrictMode>
);
