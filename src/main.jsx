import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          {/* <Route path="/home" element={<Home />}/> */}
      </Routes>
    
    </BrowserRouter>
)