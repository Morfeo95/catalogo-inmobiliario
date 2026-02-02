import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import { useState } from 'react'
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Index />} />
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
