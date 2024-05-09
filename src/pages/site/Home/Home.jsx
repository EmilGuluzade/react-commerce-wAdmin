import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'

const Home = () => {
  const {products,loading}=useContext(MainContext)

  return (
    <div>
    
       {
        loading ? <Loading/>:( 
          <>
          <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                 {
                  products.map((item,index)=>(
                    <div key={index} class="col mb-5">
                        <div class="card h-100">
                          
                            <img width="100%" height="300px"class="card-img-top" src={item.image} alt="..." />
                
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder ">{item.title}</h5>
                                   
                                   {item.price}
                                </div>
                            </div>
                
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center d-flex justify-content-center  gap-5"><a class="btn btn-outline-dark mt-auto" href="#">Detail</a><a class=" btn btn-primary mt-auto" href="#">Add</a></div>
                            </div>
                        </div>
                    </div>
                  ))
                 }
                   
                </div>
            </div>
        </section>
          </>
         )
       }
        
    </div>
  )
}

export default Home
