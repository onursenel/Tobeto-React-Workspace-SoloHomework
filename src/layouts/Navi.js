import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.PNG';
import CartSummary from './CartSummary';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function Navi() {
  const { cartItems } = useSelector(state => state.cart)


  const [isAuthenticated, setIsAuthenticated] = useState()

  function handleSignOut(params) {
    setIsAuthenticated(false)


  }

  function handleSignIn(params) {
    setIsAuthenticated(true)
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="40" />
            Delta Rental
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Ana Sayfa</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Hakkımızda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">İletişim</Link>
              </li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                {cartItems.length > 0 &&<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sepetim
                </Link>}
                
                <ul className="dropdown-menu">
                  <CartSummary></CartSummary>
                </ul>
              </li>

              {isAuthenticated ? <SignIn signOut={handleSignOut}></SignIn> : <SignOut signIn={handleSignIn}></SignOut>}


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
