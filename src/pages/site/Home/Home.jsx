import React, { useContext, useEffect, useRef, useState } from "react";
import MainContext from "../../../context/context";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import ProductCard from "../../../components/site/ProductsCard/ProductCard";

const Home = () => {
  const [inpVal, setInpval] = useState("");
  const [priceSelVal, setPriceSelVal] = useState("default");
  const [nameSelVal, setNameSelVal] = useState("default");
  const { products, loading, setLoading, setError } = useContext(MainContext);


  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Home</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
          <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
              <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Shop in style</h1>
                <p class="lead fw-normal text-white-50 mb-0">
                  With this shop hompeage template
                </p>
              </div>
            </div>
          </header>
          <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
              <div className="row  mb-5 ">
                <div className="col-4  ">
                  <label className="mx-3" htmlFor="search">
                    Search by name
                  </label>
                  <input
                    type="search"
                    id="search"
                    value={inpVal}
                    onChange={(e) => {
                      setInpval(e.target.value);
                    }}
                  />
                </div>
                <div className="col-4">
                  <label className="mx-3" htmlFor="search">
                    Sort by price
                  </label>
                  <select
                    onChange={(e) => {
                      setPriceSelVal(e.target.value);
                    }}
                    value={priceSelVal}
                    name=""
                    id=""
                  >
                    <option value="default">Default</option>
                    <option value="htl">High to Low</option>
                    <option value="lth">Low to High</option>
                  </select>
                </div>
                
              </div>
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <ProductCard inpVal={inpVal} setNameSelVal={setNameSelVal}  priceSelVal={priceSelVal}  setInpval={setInpval}></ProductCard>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
