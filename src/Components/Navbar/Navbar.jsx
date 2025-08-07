import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext';
import { useSearch } from '../Search/SearchContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const { searchQuery, setSearchQuery, performSearch } = useSearch();
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
          <form className="d-flex navbar-searchbar me-3" role="search" onSubmit={(e) => {
            e.preventDefault();
            performSearch(searchQuery);
          }}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search states or crafts..." 
              aria-label="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ outline: '1px solid #87CEEB', minWidth: 200 }}
            />
            <button className="btn btn-search" type="submit">Search</button>
          </form>
          {user ? (
            <div className="user-profile-inline d-flex align-items-center">
              <div className="user-avatar me-2">
                <span>{user.name.charAt(0).toUpperCase()}</span>
              </div>
              <span className="user-name me-3">{user.name}</span>
              <button className="btn btn-logout" onClick={logout}>
                <i className="dropdown-icon">🚪</i> Sign Out
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-login">Sign In</Link>
              <Link to="/register" className="btn btn-signup">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}