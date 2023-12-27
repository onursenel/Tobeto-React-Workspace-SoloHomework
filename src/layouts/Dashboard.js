import React from 'react'

import Categories from './Categories'
import ProductList from '../pages/ProductList'



export default function Dashboard() {
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-3"><Categories /></div>
                    <div class="col-9"><ProductList /></div>
                </div>
            </div>
            
            
        </div>
    )
}
