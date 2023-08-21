import React from 'react'
import Home from './Home'
import {Routes, Route} from "react-router-dom"; 
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';

const Pages = () => {
  return (
      
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      
   
  ); 
}

export default Pages