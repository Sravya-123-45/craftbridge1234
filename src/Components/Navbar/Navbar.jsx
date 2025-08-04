import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
 
export const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">CraftBridge</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home"><p className='h3 mx-5'>  Home </p></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/States"> <p className='h3 mx-5'>  States </p></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about"> <p className='h3 mx-5'>  About </p></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact"> <p className='h3 mx-5'> Contact  </p></Link>
      </li>
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ outline: '1px solid #F3D5B5' }}/>
        <button className="btn btn-outline-success me-5" style={{ backgroundColor: '#F3D5B5', borderColor: '#e7bc91', color: '#8B5E34'}} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    </>
  )
}