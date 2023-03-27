import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";
const Products = (props) => {
  const cartItemData = useSelector((state) => state.cartItem.productItems);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {cartItemData.map((data) => {
          return (
            <ProductItem
              title={data.title}
              price={data.price}
              description={data.description}
              key={data.title}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
