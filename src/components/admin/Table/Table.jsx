import React, { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import MainContext from "../../../context/context";
import axios from "axios";
const Table = ({ product }) => {
  const { setProducts,products } = useContext(MainContext);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
      setProducts([...products.filter((x) => x.id != res.data.id)]);
      toast.success("item deleted")
    });
  };
  return (
    <table class=" mt-5  container table table-hover table-dark table-striped-columns">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {product.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={item.image} alt="" width="100px" height="100px" />
            </td>
            <td>{item.title}</td>
            <td>{item.description}</td>

            <td>{item.price}$</td>
            <td>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
                className="btn btn-danger "
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
