import React, { useContext } from 'react'
import Loading from '../../Loading/Loading'
import MainContext from '../../../context/context'
import Table from '../../../components/admin/Table/Table'
import {Helmet} from 'react-helmet-async';

const Products = () => {
  const {products,loading}=useContext(MainContext)

  return (<>
   <Helmet>
        <title>Products</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    {
  loading ? <Loading/>: <Table product={products}/>
 }
  </>

  )
}

export default Products