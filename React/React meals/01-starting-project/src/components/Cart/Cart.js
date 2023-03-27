import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CheckOutForm from "./CheckOutForm";
import axios from "axios";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [hasChecked, setHasChecked] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [didSent, setDidSent] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  function orderHandler() {
    setHasChecked(true);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  async function confirmHandler(formData) {
    setIsSending(true);
    try {
      console.log(formData);

      const response = await axios.patch(
        "https://react-http-195cc-default-rtdb.asia-southeast1.firebasedatabase.app/usersorders.json",
        {
          user: formData,
          order: cartCtx.items,
        }
      );
      setIsSending(false);
      setDidSent(true);
      cartCtx.resetCart();
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  // console.log(props);
  const mainContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>

      {hasChecked && (
        <CheckOutForm onConfirm={confirmHandler} onClose={props.onClose} />
      )}
    </>
  );
  const loadingContent = (
    <div className={classes.spinner}>
      <i className={"fa fa-spinner fa-spin"}></i>
    </div>
  );
  const loadedContent = (
    <>
      <p>Ordered successfully 👍</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {isSending && loadingContent}
      {!isSending && !didSent && mainContent}
      {didSent && loadedContent}
    </Modal>
  );
};

export default Cart;
