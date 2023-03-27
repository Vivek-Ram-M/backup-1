import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cartItem";
const CartItem = (props) => {
  console.log(props.item);
  const { title, quantity, total, price } = props.item;
  // console.log(title, total, quantity, price);
  const dispatch = useDispatch();
  function addToCartHandler() {
    dispatch(cartAction.addToCart(props.item));
  }
  function removeCartItemsHandler() {
    dispatch(cartAction.cartItemDeletion(props.item));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItemsHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
