import { useEffect, useState } from 'react';
import './App.css'
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
    .then(response => {
      setProducts(response.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
   <>
    <div>Fullstack Tutorial</div>
    <p>Products: {products.length}</p>

    {
      products.map((product, index) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))
    }
   </>
  )
}

export default App
