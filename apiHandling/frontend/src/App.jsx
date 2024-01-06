import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

function App() {

  // const [products, error, loading] = customReactQuery("/api/products");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    (
      async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(`/api/products?search=${search}`, {
          signal: controller.signal // for canceling the old extra request
        });
        console.log(response.data)
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log('Request Canceled', error.message); 
          return 
        }
        setError(true);
        setLoading(false);
      }
      }
    )()

    // cleanup
    return () => {
      controller.abort();
    }
  }, [search])

  const serachHandler = (e) => {
    setSearch(e.target.value)
  }

  // if(error) {
  //   return <h1>Something Went Wrong</h1>
  // }

  // if(loading) {
  //   return <h3>Loading...</h3>
  // }

  return (
    <>
      <h2>Chai aur API in react</h2>
      <input type="text" onChange={serachHandler} />
      {loading && (<h3>Loading...</h3>)}
      {error && (<h2>Something Went Wrong</h2>)}

      <h3>Number of Products are: {products.length}</h3>
    </>
  )
}

export default App;

// Create custom React Query
// =========================
// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (
//       async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data)
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//       }
//     )()
//   }, [])

//   return  [
//     products, error, loading
//   ]
// }
