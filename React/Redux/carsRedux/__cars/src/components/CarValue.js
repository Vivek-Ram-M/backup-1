function CarValue(props) {
  return (
    <p className="display-5 text-end mt-3">
      Total Cost : ₹
      {props.cars.reduce((acc, val) => {
        console.log(val.cost);
        return acc + +val.cost;
      }, 0)}
    </p>
  );
}

export default CarValue;
