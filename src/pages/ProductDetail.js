import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductService from "../services/productService";

export default function ProductDetail() {
    let { id } = useParams()


    const [products, setProducts] = useState({});

    useEffect(() => {
      let productService = new ProductService()
      productService.getProductsById({id}).then(result => setProducts(result.data))
    })
    
    return (
        
        <div>
            
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{products.modelName}</h5>
                    <p className="card-text">Aracın özellikleri </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An i</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <Link to="#" className="card-link">
                        <button type="button" className="btn btn-outline-success">Sepete Ekle</button>
                    </Link>
                    <Link to="#" className="card-link">
                        <button type="button" className="btn btn-outline-success">Favorilere Ekle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
