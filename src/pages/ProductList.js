import React, { useEffect, useState } from "react";

import ProductService from "../services/productService";
import { Link } from "react-router-dom";

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data))
  })



  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Model</th>
            <th scope="col">Kilometre</th>
            <th scope="col">Yıl</th>
            <th scope="col">Renk</th>
            <th scope="col">Fiyat</th>
          </tr>
        </thead>

        {
          products.map(product => (
            <tr key={product.id}>
              <td>{product.modelName}</td>
              <td>{product.kilometer}</td>
              <td>{product.year}</td>
              <td>{product.colorName}</td>
              <td>{product.dailyPrice}</td>
              
              <td><Link to={`/products/${product.id}`}>
              <button type="button" class="btn btn-info">Kirala</button>
              </Link></td>
            </tr>
          ))
        }


      </table>
    </div >
  )
}
