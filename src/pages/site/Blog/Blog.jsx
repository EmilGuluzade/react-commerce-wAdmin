import React, { useContext } from "react";
import MainContext from "../../../context/context";
import {Helmet} from 'react-helmet-async';

const Blog = () => {
  const { setArticles, articles } = useContext(MainContext);

  return (
    <>
          <Helmet>
        <title>Blog</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
             <div class="container d-flex justify-content-center  gap-5 mb-5  mt-5 flex-wrap">
    
      {articles.map((item, index) => (
        <div
          style={{ border: "1px solid black" }}
          className=" rounded-5  p-2 w-75 d-flex flex-column align-items-center  "
        >
          <h2>{item.title}</h2>
          <img src={item.urlToImage} width="80%" alt="" />
          <p>{item.content}</p>
        </div>
      ))}
    </div>
    </>
   
  );
};

export default Blog;
