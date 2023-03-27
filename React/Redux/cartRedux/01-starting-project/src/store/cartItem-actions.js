import axios from "axios";
import { cartAction } from "./cartItem";
// import { useDispatch } from "react-redux";
import { toggleAction } from "./cartToggle";

export function sendCartData(cart) {
  return (dispatch) => {
    async function sendToDatabase() {
      try {
        dispatch(
          toggleAction.changeNotificationStatus({
            status: "Pending",
            title: "Sending Data",
            message: "Data is sending please wait",
          })
        );
        const res = await axios.put(
          "https://react-http-195cc-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json",
          cart
        );
        console.log(res.data);
      } catch (e) {
        console.log(e, e.message);
        dispatch(
          toggleAction.changeNotificationStatus({
            status: "error",
            title: "Sending data",
            message: "Data sent failed 😞",
          })
        );
      }
    }

    sendToDatabase();
    dispatch(
      toggleAction.changeNotificationStatus({
        status: "success",
        title: "Status",
        message: "Data sent successfully 😀🟩",
      })
    );
  };
}

export function fetchCartData() {
  return (dispatch) => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://react-http-195cc-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json"
        );
        console.log(response.data);
        dispatch(
          cartAction.replaceCartItems({ cartItems: response.data || [] })
        );
      } catch (e) {
        console.log(e);
        dispatch(
          toggleAction.changeNotificationStatus({
            status: "error",
            title: "Sending data",
            message: "Data fetch failed 😞",
          })
        );
      }
    }
    fetchData();
  };
}
