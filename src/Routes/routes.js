import Error from "../pages/Error/Error";
import Add from "../pages/admin/Add/Add";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Blog from "../pages/site/Blog/Blog";
import Cart from "../pages/site/Cart/Cart";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";

import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [
  {
    path: "/",
    element:<SiteRoot/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
     {
        path: "products/:id",
        element: <Detail/>,
      },{
        path: "cart",
        element: <Cart/>,
      },
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "*",
        element: <Error/>,
      },
    ],
  },
  {
    path: "/admin",
    element:<AdminRoot/>,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products/>,
      }, {
        path: "add",
        element: <Add/>,
      },{
        path: "*",
        element: <Error/>,
      }
    ],
  },
];

export default ROUTES;
