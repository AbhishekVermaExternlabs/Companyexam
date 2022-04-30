import React from 'react'
import Home from "./component/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    </Router>
      
    </div>
  )
}