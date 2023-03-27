import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItemData = useSelector((state) => state.cartItem.cartItems);
  console.log(cartItemData);
  let content;
  if (cartItemData.length === 0) {
    content = (
      <p className={classes["cart-placeholder"]}>No items in the Cart 📪</p>
    );
  } else {
    content = (
      <ul>
        {cartItemData.map((val) => (
          <CartItem item={val} key={val.title} />
        ))}
      </ul>
    );
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {content}
    </Card>
  );
};

export default Cart;
