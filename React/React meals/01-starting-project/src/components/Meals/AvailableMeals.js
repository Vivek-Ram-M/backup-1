import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function MealsRequest() {
      try {
        const response = await fetch(
          "https://react-http-195cc-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Unable to fetch meals");
        }
        setError("");
        const data = await response.json();
        console.log(data);
        const loadedArr = [];
        for (let key in data) {
          loadedArr.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedArr);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
        setError(error.message);
      }
    }
    MealsRequest();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  let content = mealsList;
  if (error) {
    content = <p className={classes.error}>{error} 💀</p>;
  }
  if (loading) {
    content = (
      <div className={classes.spinner}>
        <i className={"fa fa-spinner fa-spin"}></i>
      </div>
    );
  }
  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
