import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/app/App';
import OurCoffeePage from "./components/our-coffee-page/our-coffee-page";
import ForYourPleasurePage from "./components/for-your-pleasure-page/for-your-pleasure-page";
import GoodItemPage from './components/good-item-page/good-item-page';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/our-coffee-page" element={<OurCoffeePage />} />
      <Route path="/for-your-pleasure-page" element={<ForYourPleasurePage />} />
      <Route path="/good-item-page/:id" element={<GoodItemPage/>} />
    </Routes>
  </BrowserRouter>
);
//