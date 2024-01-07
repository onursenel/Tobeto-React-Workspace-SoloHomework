
import axios from 'axios'

export default class productService{
    getProducts(){
        return axios.get("http://localhost:8080/api/cars/getAll")
    }
    getProductsById({id}){
        return axios.get("http://localhost:8080/api/cars/{id}?id="+id)
    }
  
}
