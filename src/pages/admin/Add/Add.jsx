import React, { useContext } from "react";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import {Helmet} from 'react-helmet-async';

import axios from "axios";
import MainContext from "../../../context/context";
import toast from "react-hot-toast";

const Add = () => {
  const { setProducts, products } = useContext(MainContext);
  return (
    <div>
     <Helmet>
        <title>Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "", price: "" }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:3000/products", {
              id: uuidv4(),
              title: values.title,
              price: values.price,
              image: values.image,
            })
            .then((res) => {
              setProducts([...products, res.data]);

              values.title = "";
              values.price = "";
              values.image = "";
              toast.success("item added");
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="container text-light p-5   gap-3 d-flex  flex-column  w-50  mt-5 rounded-3 mb-5 bg-dark "
            onSubmit={handleSubmit}
          >
            <label for="title" class="form-label">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              class="form-control"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <label for="image" class="form-label">
              Product Image
            </label>

            <input
              type="text"
              name="image"
              placeholder="Enter image url"
              class="form-control"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <label for="price" class="form-label">
              Product Price
            </label>

            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              class="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <button className="btn btn-primary mt-3 " type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
