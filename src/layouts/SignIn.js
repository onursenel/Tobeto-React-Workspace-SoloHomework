import { Dropdown } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'



export default function SignIn({signOut}) {



    return (

        <div>
        <div className="nav-item dropdown navbar-nav">
          <img
            src="https://avatars.githubusercontent.com/u/102322010?v=4"
            className="nav-link dropdown-toggle img-fluid cursor-pointer rounded-circle"
            alt="User Avatar"
            role="button"
            data-bs-toggle="dropdown"
            style={{ maxWidth: "60px" }}
          />
          <div className="dropdown-menu" style={{ marginTop: "7px" }}>
            <Link to="#" className="dropdown-item" text>
              Bilgilerim 
            </Link>
            <Link onClick={signOut} to="#" className="dropdown-item">
              Çıkış Yap
            </Link>
          </div>
          Onurcan Şenel
        </div>
      </div>
        
    )
}
