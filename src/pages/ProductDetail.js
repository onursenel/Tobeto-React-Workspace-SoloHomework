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
            
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{products.modelName}</h5>
                    <p class="card-text">Aracın özellikleri</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <Link to="#" class="card-link">
                        <button type="button" class="btn btn-outline-success">Sepete Ekle</button>
                    </Link>
                    <Link to="#" class="card-link">
                        <button type="button" class="btn btn-outline-success">Favorilere Ekle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
