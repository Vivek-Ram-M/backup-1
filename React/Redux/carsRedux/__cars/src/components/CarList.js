import { useSelector, useDispatch } from "react-redux";
import CarValue from "./CarValue";
import { carsAction } from "./store/index";

function CarList() {
  function deleteClickHandler(id) {
    // console.log(cars, carsAction.removeCars(id));
    dispatch(carsAction.removeCars(id));
    // console.log("inside delete handler");
  }
  const dispatch = useDispatch();
  const { formName, cars } = useSelector(
    ({ cars: { search, data }, carsForm: { name } }) => {
      const filteredArray = data.filter((val) =>
        val.name.toLowerCase().includes(search.toLowerCase())
      );
      return {
        cars: filteredArray,
        formName: name,
      };
    }
  );
  //  const search = useSelector((state) => state.cars.search);
  // const carsOriginal = ueSelector((state) => state.cars.data);
  // console.log(cars);
  // const cars = carsOriginal.filter((val) =>
  // val.name.toLowerCase().includes(search.toLowerCase())
  // );
  // console.log(cars);

  const content = (
    <ul className="mt-5">
      {cars.map((val) => {
        const bold =
          formName && val.name.toLowerCase().includes(formName.toLowerCase());
        console.log(bold);
        return (
          <li
            key={val.id}
            className="d-flex justify-content-between mt-3 align-items-center shadow p-2"
          >
            <h4
              className={
                bold ? "display-5 fw-bolder text-primary" : "display-5"
              }
            >
              {val.name} - ₹{val.cost}
            </h4>
            <button
              className="btn btn-danger"
              onClick={deleteClickHandler.bind({}, val.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {content}
      <CarValue cars={cars} />
    </>
  );
}

export default CarList;
