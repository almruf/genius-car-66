import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from '../../Pages/Home/Home/Home';
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import About from "../../Pages/Home/About/About";
import Services from "../../Pages/Services/Services";
import Product from "../../Pages/Product/Product";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Orders from "../../Pages/Orders/Orders";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path: "/",
          element:<Home> </Home>
        },
        {
          path: "services",
          element:<Services> </Services>
        },
        {
          path: "products",
          element:<Product> </Product>
        },
        {
          path: "about",
          element:<About> </About>
        },
        {
          path:"login",
          element:<Login></Login>,
        },
        {
          path:"signup",
          element:<SignUp></SignUp>,
        },
        {
          path:"/CheckOut/:id",
          element:<CheckOut></CheckOut>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "orders",
          element:<Orders> </Orders>
        }
      ]
    }
  ])

  export default router;

  