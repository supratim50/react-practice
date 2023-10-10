import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (
      async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products");
        console.log(response.data)
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      }
    )()
  }, [])

  if(error) {
    return <h1>Something Went Wrong</h1>
  }

  if(loading) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <h2>Chai aur API in react</h2>
      <h3>Number of Products are: {products.length}</h3>
    </>
  )
}

export default App
