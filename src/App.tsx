import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import theme from './data/config.json'
import { useState } from 'react'
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import { BUILD_ID } from './utils/build';
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("Build:", BUILD_ID);
  return (
    <BrowserRouter>
    <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            borderRadius: "12px",
            background: theme.primary,
            color: theme.textHover
          }
        }}
      />
      <Analytics/>    
      <NavBar/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/property/:id" element={<Index/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/addhouses-page" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Dashboard isLoggedIn= {isLoggedIn} />
          </ProtectedRoute>
          } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
