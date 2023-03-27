import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../../store/cartToggle";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemData = useSelector((state) => state.cartItem.cartItems);
  console.log(cartItemData);
  const totalCartItems = cartItemData.reduce((acc, val) => {
    return acc + val.quantity;
  }, 0);
  // console.log(totalCartItems);
  function toggleHandler() {
    dispatch(toggleAction.toggleCart());
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
