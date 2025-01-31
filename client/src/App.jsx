import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Projects from './pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element= {<About />} />
      <Route path="/dashboard" element= {<Dashboard />} /> 
      <Route path="/sign-up" element= {<SignUp />} />
      <Route path="/login" element= {<Login />} />
      <Route path="/projects" element= {<Projects />} />
    </Routes>
    </BrowserRouter>
  )
}
