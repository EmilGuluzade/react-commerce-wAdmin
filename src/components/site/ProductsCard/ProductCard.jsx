import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  inpVal,
  priceSelVal,
  nameSelVal,
  setError,
  setLoading,
}) => {
  const [searched, setSearched] = useState([]);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );

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
  }, [inpVal, priceSelVal, nameSelVal]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket)); 
  }, [basket]);
  const addToBasket = (id) => {
    let basketItem = basket.find((e) => e.id == id);
    if (!basketItem) {
      let target = searched.find((x) => x.id == id);

      setBasket([
        ...basket,
        {
          ...target,
          count: 1,
          totalPrice: target.price,
        },
      ]);
    } else {
      basketItem.count++;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    }
  };
  return (
    <>
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
                <button
                  onClick={() => {
                    addToBasket(item.id);
                  }}
                  class=" btn btn-primary mt-auto"
                  href="#"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
