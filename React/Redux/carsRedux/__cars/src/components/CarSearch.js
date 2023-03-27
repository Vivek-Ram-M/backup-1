import { useDispatch, useSelector } from "react-redux";
import { carsAction } from "./store/slice/carsSlice";

function CarSearch() {
  const search = useSelector((state) => state.cars.search);
  const dispatch = useDispatch();
  function searchHandler(event) {
    dispatch(carsAction.changeSearchName(event.target.value));
  }
  return (
    <div className="d-flex gap-5- m-5">
      <label className="h3 form-label w-50" htmlFor="search">
        CarSearch
      </label>
      <input
        type="search"
        id="search"
        className="form-control "
        placeholder="Search for the cars..."
        value={search}
        onChange={searchHandler}
      />
    </div>
  );
}

export default CarSearch;
