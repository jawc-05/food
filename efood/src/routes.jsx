import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';

function Router() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante" element={<Restaurant />} />
        </Routes>
    );
}

export default Router;