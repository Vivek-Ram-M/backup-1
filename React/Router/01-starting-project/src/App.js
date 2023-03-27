import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import NavBar from "./Component/NavBar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./ProductDetails";

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );
const p1 = "p1";
const router = createBrowserRouter([
  {
    path: "/root",
    element: <NavBar />,
    errorElement: (
      <>
        <NavBar /> <h1>Error has occurred</h1>
      </>
    ),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            path: "pro",
            element: <h1>nested router</h1>,
          },
          { path: "con", element: <p>another nested element</p> },
        ],
      },
      { path: `products/:${p1}`, element: <ProductDetails /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDefinitions);
console.log(router);

function App() {
  console.log("inside app");
  return <RouterProvider router={router} fallbackElement={<p>loading</p>} />;
}

export default App;
