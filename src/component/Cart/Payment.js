import React, { Fragment, useState ,useEffect} from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { useAlert } from "react-alert";
 import CheckoutSteps from "../Cart/CheckoutSteps";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [cardnumber, setCardNumber] = useState();
  const [expiry,setExpiry] = useState();
  const [cvv, setCvvCode] = useState();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const shippingSubmit = (e) => {
    e.preventDefault();
    if (cardnumber.length < 12 || cardnumber.length > 12) {
      alert.error("Card Number should be 12 digits Long");
      return;
    }

    if (cvv.length < 3 || cvv.length > 3) {
      alert.error("CVV Code should be 3 digits Long");
      return;
    }
    // dispatch(
    //   saveShippingInfo({ cardnumber,expiry,cvv })
    // );
    dispatch(createOrder(order));

          navigate("/success");
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
       <CheckoutSteps activeStep={2} />
      
       <div className="shippingContainer">
         <div className="shippingBox">
           <h2 className="shippingHeading">Card Details</h2>

           <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <CreditCardIcon />
              <input
                type="number"
                placeholder="CardNumber"
                required
                value={cardnumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div>
              <EventIcon />
              <input
                type="month"
                min="2022-06"
                 max="2027-12"
                placeholder="Expiry year"
                required
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>

            <div>
              <VpnKeyIcon />
              <input
                type="number"
                placeholder="Cvv Code"
                required
                value={cvv}
                onChange={(e) => setCvvCode(e.target.value)}
                size="3"
              />
            </div>
            <input
              type="submit"
              value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
              className="shippingBtn"
              //disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;



