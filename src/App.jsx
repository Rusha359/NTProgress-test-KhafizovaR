import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrentTime from './features/CurrentTime/CurrentTime';
import Trading from './features/Trading/Trading';
import Archive from './features/Archive/Archive';

function App() {
  return (
    <BrowserRouter>
      <CurrentTime />
      <Routes>
        <Route path="/" element={<Trading />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
