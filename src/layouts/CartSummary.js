import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function CartSummary() {

    const {cartItems} = useSelector(state => state.cart)
    return (
        <div>
            {
                cartItems.map((cartItem)=>(
                    <li><Link className="dropdown-item mr-5" to="#">
                        {cartItem.product.modelName}
                        <label for="floatingTextarea">= {cartItem.quantity}</label>
                        </Link></li>

                ))
            }
            
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/cartDetail">Sepetime Git</Link></li>
        </div>
    )
}
