import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ROUTES from "./Routes/routes";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import MainContext from './context/context';

import axios from "axios";
function App() {
const router = createBrowserRouter(ROUTES);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts([...res.data]);
      setLoading(false)

    }).catch(error=>{
      setError(error)
      setLoading(false)
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/articles").then((res) => {
      setArticles([...res.data]);
      setLoading(false)

    }).catch(error=>{
      setError(error)
      setLoading(false)
    });
  }, []); 
 const  contextData ={products,setProducts,loading, setLoading,error, setError,articles,setArticles}
  return (
    <div className="App">
      <MainContext.Provider value={contextData}>
      <RouterProvider router={router}></RouterProvider>

      </MainContext.Provider>
    </div>
  );
}

export default App;
