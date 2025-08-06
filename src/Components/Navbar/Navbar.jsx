import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar overlay */}
      <div className={`sidebar-overlay${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)} />
      {/* Sidebar drawer */}
      <div className={`sidebar-drawer${sidebarOpen ? ' open' : ''}`}>
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>&times;</button>
        <ul className="sidebar-links">
          <li><Link to="/home" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/States" onClick={() => setSidebarOpen(false)}>States</Link></li>
          <li><Link to="/buyer" onClick={() => setSidebarOpen(false)}>🛍️ Buyer</Link></li>
          <li><Link to="/seller" onClick={() => setSidebarOpen(false)}>👨‍🎨 Seller</Link></li>
          <li><Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg custom-navbar justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Hamburger menu */}
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
            <span className="hamburger-icon">&#9776;</span>
          </button>
          {/* Brand name right after hamburger */}
          <Link className="navbar-brand custom-logo ms-2" to="/home">CraftBridge</Link>
        </div>
        {/* Search bar before auth buttons */}
        <div className="d-flex align-items-center">
          <form className="d-flex navbar-searchbar me-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ outline: '1px solid #87CEEB', minWidth: 120 }}/>
            <button className="btn btn-search" type="submit">Search</button>
          </form>
          {user ? (
            <>
              <span className="me-2" style={{ color: '#ffffff', fontWeight: 500 }}>Hello, {user.name}</span>
              <button className="btn btn-logout" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-login me-2">Login</Link>
              <Link to="/register" className="btn btn-signup">Register</Link>
            </>
          )}
        </div>
      </nav>
    </>
  )
}