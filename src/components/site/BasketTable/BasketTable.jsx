import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../../../context/context';


const BaskeTable = () => {

  const { products} = useContext(MainContext);
  const [basket,setBasket]=useState(JSON.parse(localStorage.getItem("basket"))?JSON.parse(localStorage.getItem("basket")):[])
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket)); 
  }, [basket]);
  const addToBasket = (id) => {
    let basketItem = basket.find((e) => e.id == id);
    
      basketItem.count++;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    
  };
  function deleteHandler(id) {
    let basketItem = basket.find((e) => e.id == id);
    if (basketItem.count>1) {
      basketItem.count--;
      basketItem.totalPrice =  Math.floor(basketItem.totalPrice - basketItem.price) ;
      setBasket([...basket]);
    } else {
      let indexOfTarget = basket.indexOf(basketItem);

  basket.splice(indexOfTarget, 1);
  setBasket([...basket]);

    }
  }
  
  return (
    <div>
       <table class=" mt-5  container table table-hover table-dark table-striped-columns">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Count</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
          <th scope="col">Add</th>

        </tr>
      </thead>
      <tbody>
        {basket.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={item.image} alt="" width="100px" height="100px" />
            </td>
            <td>{item.title}</td>
            <td>{item.count}</td>

            <td>{item.totalPrice}$</td>
            <td>
              <button
                onClick={() => {
                  deleteHandler(item.id);
                }}
                className="btn btn-danger "
              >
                delete
              </button>
             
            </td>
            <td>
            <button
                onClick={() => {
                  addToBasket(item.id);
                }}
                className="btn btn-primary "
              >
               Add
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table> 
    </div>
  )
}

export default BaskeTable

