import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
