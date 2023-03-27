// import { Button } from "bootstrap";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { carsFormAction } from "./store/slice/carsFormSlice";
import { carsAction } from "./store/slice/carsSlice";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return { name: state.carsForm.name, cost: state.carsForm.cost };
  });
  function handleNameChange(event) {
    dispatch(carsFormAction.changeName(event.target.value));
  }
  function handleCostChange(event) {
    dispatch(carsFormAction.changeCost(event.target.value));
  }

  function submitHandler(event) {
    event.preventDefault();
    dispatch(carsAction.addCars({ name, cost }));
  }
  return (
    <>
      <h2 className="display-4 text-center">Add Cars</h2>
      <Form
        className="d-flex justify-content-center align-items-center gap-5 shadow p-3"
        onSubmit={submitHandler}
      >
        <Form.Group controlId="formBasicName" className="w-25 ">
          <Form.Label className="h4">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the car name"
            onChange={handleNameChange}
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPrice" className="w-25">
          <Form.Label className="h4">Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the price of the car"
            onChange={handleCostChange}
            value={cost || ""}
            // className="-1"
          />
        </Form.Group>
        <Button type="submit"> Submit</Button>
      </Form>
    </>
  );
}

export default CarForm;
