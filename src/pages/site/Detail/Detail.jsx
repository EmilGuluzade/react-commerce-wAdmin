import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MainContext from '../../../context/context';
import axios from 'axios';
const Detail = () => {
  const { setLoading, setError } = useContext(MainContext);
const [data,setData]=useState([])
const {id}=useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then((res) => {
            setData(res.data)
          setLoading(false)
    
        }).catch(error=>{
          setError(error)
          setLoading(false)
        });
      }, []);
      
  return (
    <div>{data.id}</div>
  )
}

export default Detail