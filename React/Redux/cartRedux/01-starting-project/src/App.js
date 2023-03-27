import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import axios from "axios";
// import { toggleAction } from "./store/cartToggle";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cartItem-actions";

let firstTime = true;

function App() {
  const isCartOpen = useSelector((state) => state.toggle.isCartOpen);
  console.log(isCartOpen);
  const notification = useSelector((state) => state.toggle.notification);
  console.log(notification, notification.title);
  const cartArr = useSelector((state) => state.cartItem.cartItems);
  const changed = useSelector((state) => state.cartItem.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    // console.log(cartArr  );
    if (changed) {
      console.log(dispatch(sendCartData(cartArr)));
    }
    // async function sendToDatabase() {
    //   const res = await axios.put(
    //     "https://react-http-195cc-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json",
    //     cartArr
    //   );
    //   console.log(res.data);
    // }

    // dispatch(
    //   toggleAction.changeNotificationStatus({
    //     status: "Pending",
    //     title: "Sending Data",
    //     message: "Data is sending please wait",
    //   })
    // );

    // sendToDatabase().catch((e) => {
    //   console.log(e, e.message);
    //   dispatch(
    //     toggleAction.changeNotificationStatus({
    //       status: "error",
    //       title: "Sending data",
    //       message: "Data sent failed 😞",
    //     })
    //   );
    // });
    // dispatch(
    //   toggleAction.changeNotificationStatus({
    //     status: "success",
    //     title: "Status",
    //     message: "Data sent successfully 😀🟩",
    //   })
    // );
  }, [cartArr, dispatch, changed]);

  useEffect(() => {
    dispatch(fetchCartData());
    console.log("Inside fetching useEffect");
  }, [dispatch]);

  return (
    <>
      {notification.title && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {isCartOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
