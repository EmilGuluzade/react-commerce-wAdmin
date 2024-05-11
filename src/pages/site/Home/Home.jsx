import React, { useContext, useEffect, useRef, useState } from "react";
import MainContext from "../../../context/context";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Home = () => {
  const [searched, setSearched] = useState([]);
  const [inpVal, setInpval] = useState("");
  const [priceSelVal, setPriceSelVal] = useState("default");
  const [nameSelVal, setNameSelVal] = useState("default");
  const { products, loading, setLoading, setError } = useContext(MainContext);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        if (inpVal.trim() != "") {
          const result = res.data.filter((item) => {
            return item.title
              .split(" ")
              .join("")
              .toLowerCase()
              .includes(inpVal.trim().toLowerCase());
          });

          if (priceSelVal == "htl") {
          
            let sorted = result.sort((a, b) => b.price - a.price);
            setSearched([...sorted]);
          } else if (priceSelVal == "lth") {
            let sorted = result.sort((a, b) => a.price - b.price);
            setSearched([...sorted]);
          } else {
    
            setSearched([...result]);
          }
        
        } else {
          const result = res.data;
          if (priceSelVal == "htl") {
            let sorted = result.sort((a, b) => b.price - a.price);

            setSearched([...sorted]);
          } else if (priceSelVal == "lth") {
            let sorted = result.sort((a, b) => a.price - b.price);
          
            setSearched([...sorted]);
          } else {
        

            setSearched([...result]);
          }
        
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [inpVal,priceSelVal,nameSelVal]);

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
                {searched.map((item, index) => (
                  <div key={index} class="col mb-5">
                    <div class="card h-100">
                      <img
                        width="100%"
                        height="300px"
                        class="card-img-top"
                        src={item.image}
                        alt="..."
                      />

                      <div class="card-body p-4">
                        <div class="text-center">
                          <h5 class="fw-bolder ">{item.title}</h5>
                          {item.price}$
                        </div>
                      </div>

                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center d-flex justify-content-center  gap-5">
                          <Link
                            to={`/products/${item.id}`}
                            class="btn btn-outline-dark mt-auto"
                            href="#"
                          >
                            Detail
                          </Link>
                          <a class=" btn btn-primary mt-auto" href="#">
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
