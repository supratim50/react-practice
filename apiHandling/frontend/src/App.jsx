import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (
      async () => {
      const response = await axios.get("http://localhost:3000/api/products");
      console.log(response.data)
      // setProducts(response);
      }
    )()
  }, [])

  return (
    <>
      <h1>Chai aur API in react</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
