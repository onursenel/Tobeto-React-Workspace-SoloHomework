import React from 'react'
import { Link } from 'react-router-dom'


export default function CartSummary() {
    return (
        <div>

            <li><Link className="dropdown-item" to="/cartDetail">Sepetime Git</Link></li>
            <li><Link className="dropdown-item" to="#">Sepeti Sil</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="#">Siparişlerimi Onayla</Link></li>
        </div>
    )
}
