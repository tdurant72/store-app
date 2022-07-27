import { useContext } from "react";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import { CartContext } from "../../contexts/cart.context";
import { motion } from "framer-motion";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItems key={item.id} cartItem={item} />
      ))}

      <span className="total">Total: ${totalPrice}</span>
    </motion.div>
  );
};

export default Checkout;
