//payment
//per login data
//cart id link to user


import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import WebFont from "webfontloader";
import React, { Profiler, useEffect, useState } from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser, updatePassword } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import Navbar from "./component/layout/Header/Navbar";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import AdminRoute from "./component/Route/AdminRoute";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList.js"
import axios from "axios";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UserList from "./component/Admin/UserList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Router>
      {/* <Header /> */}
      <Navbar />

      {isAuthenticated && <UserOptions user={user} />}

      {/* {stripeApiKey && (
        <Elements stripe={loadStripe=(stripeApiKey)}>
        <Route exact path="/process/payment" element={<AdminRoute><Payment/></AdminRoute>} /> 
        </Elements>
      )} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/account"
          element={
            <AdminRoute>
              <Profile />{" "}
            </AdminRoute>
          }
        />
        <Route
          path="/me/update"
          element={
            <AdminRoute>
              <UpdateProfile />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/password/update"
          element={
            <AdminRoute>
              <UpdatePassword />
            </AdminRoute>
          }
        />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          exact
          path="/shipping"
          element={
            <AdminRoute>
              <Shipping />
            </AdminRoute>
          }
        />

        {/* <Route exact path="/process/payment" element={
          <AdminRoute> 
            <Elements stripe={loadStripe=(stripeApiKey)}>
            <Payment/> 
            </Elements>
          </AdminRoute>
        } /> */}
        <Route
          exact
          path="/process/payment"
          element={
            <AdminRoute>
              <Payment/> 
            </AdminRoute>
          }
        />

        <Route
          exact
          path="/success"
          element={
            <AdminRoute>
              <OrderSuccess />
            </AdminRoute>
          }
        />

        <Route
          exact
          path="/orders"
          element={
            <AdminRoute>
              <MyOrders />
            </AdminRoute>
          }
        />

        <Route
          exact
          path="/order/confirm"
          element={
            <AdminRoute>
              <ConfirmOrder />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/order/:id"
          element={
            <AdminRoute>
              <OrderDetails />
            </AdminRoute>
          }
        />

        <Route
          exact
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        <Route
          exact
          path="/admin/products"
          element={
            <AdminRoute>
              <ProductList />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/product"
          element={
            <AdminRoute>
              <NewProduct />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/product/:id"
          element={
            <AdminRoute>
              <UpdateProduct />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/orders"
          element={
            <AdminRoute>
              <OrderList />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/order/:id"
          element={
            <AdminRoute>
              <ProcessOrder />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/users"
          element={
            <AdminRoute>
              <UserList />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/user/:id"
          element={
            <AdminRoute>
              <UpdateUser />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/reviews"
          element={
            <AdminRoute>
              <ProductReviews/>
            </AdminRoute>
          }
        />
        {/* <Route element={window.location.pathname === "/process/payment" ? null : <NotFound/>}/> */}
        <Route element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
