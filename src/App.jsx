import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Provider from './context/context';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
