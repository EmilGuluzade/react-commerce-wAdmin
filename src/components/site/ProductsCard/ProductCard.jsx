import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({inpVal, priceSelVal,nameSelVal,setError,setLoading}) => {
    const [searched, setSearched] = useState([]);

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
    },[inpVal,priceSelVal,nameSelVal]);
  return (
    <>
      {
        searched.map((item, index) => (
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
                ))
      }
    </>
  )
}

export default ProductCard
