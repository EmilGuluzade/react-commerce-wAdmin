import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../../../context/context";
import axios from "axios";
import {Helmet} from 'react-helmet-async';

const Detail = () => {
  const { setLoading, setError } = useContext(MainContext);
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (<>
      <Helmet>
        <title>Detail </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet><div className="container d-flex  mt-5" >
      <div className="col-6">
        <img width="300px" height="300px" src={data.image} alt="" />
      </div>
      <div className="col-6 d-flex flex-column justify-content-center ">
        <h3>{data.title}</h3>
        <h4>{data.price}$</h4>
        <p>{data.description}</p>

      </div>
    </div>
  </>
    
  );
};

export default Detail;
