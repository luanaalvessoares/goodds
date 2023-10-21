import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

const RoutesGoodds = () => (
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
    </Routes>
)

export default RoutesGoodds;