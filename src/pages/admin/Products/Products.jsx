import React, { useContext } from 'react'
import Loading from '../../Loading/Loading'
import MainContext from '../../../context/context'
import Table from '../../../components/admin/Table/Table'

const Products = () => {
  const {products,loading}=useContext(MainContext)

  return (<>
    {
  loading ? <Loading/>: <Table product={products}/>
 }
  </>

  )
}

export default Products