import React, { useEffect, useState } from "react";

import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data))
  })

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
    toast.success(`${product.modelName} sepete eklendi`)
  }



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
            <th scope="col"></th>
            <th scope="col"></th>
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
              <button type="button" className="btn btn-info">Hemen Kirala</button>
              </Link></td>

              <button onClick={()=>handleAddToCart(product)} type="button" className="btn btn-info">Sepete Ekle</button>
            </tr>
          ))
        }


      </table>
    </div >
  )
}
