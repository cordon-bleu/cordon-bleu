import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripe = props => {
  const publishableKey = "pk_test_CFBk0wKAg5NfvQdakXsQYcEm00MPFstx6q";

  const onToken = token => {
    const body = {
      amount: 999,
      token: token
    };
    axios
      .post("/stripe/payment", body)
      .then(response => {
        alert("Payment Success");
      })
      .catch(error => {
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Checkout" //Component button text
      name="Cordon Bleu" //Modal Header
      description=""
      panelLabel="Place Order" //Submit button in modal
      amount={props.amount * 100} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      // image="" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default stripe;
