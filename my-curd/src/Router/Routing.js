import React from 'react';
import Home from '../Home/Home';
import Issue from '../Issue/Issue';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Header />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/Issue' element={<Issue />}></Route>
            </Routes>
        </BrowserRouter>       
    </>
  )
}

export default Routing 