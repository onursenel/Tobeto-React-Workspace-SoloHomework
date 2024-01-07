import React from 'react'

import Categories from './Categories'
import ProductList from '../pages/ProductList'
import SignIn from './SignIn'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import About from '../pages/About'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'




export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right'></ToastContainer>
            <div className="container text-center">
                <div className="row">
                    
                    <div className="col-3"><Categories /></div>
                    <div className="col-9">
                        <Routes >
                            <Route path='/' Component={ProductList}></Route>
                            <Route path='/products' Component={ProductList}></Route>
                            <Route path='/products/:id' Component={ProductDetail}></Route>
                            <Route path='/about' Component={About}></Route>
                            <Route path='/cartDetail' Component={CartDetail}></Route>
                        </Routes>
                        
                    </div>
                    

                </div>
            </div>
            
            
        </div>
    )
}
