import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Source from '../components/Source'

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<Source />} />
        <Route path="/keybord/:key_id" element={<Source />} />
        <Route path="/Our/:Our_id" element={<Source />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute