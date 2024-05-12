import React from 'react'
import {Helmet} from 'react-helmet-async';
import  BasketTable from "../../../components/site/BasketTable/BasketTable"
const Cart = () => {
  return (
    <div>
     
     <Helmet>
        <title>Blog</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <BasketTable></BasketTable>
    </div>
  )
}

export default Cart
