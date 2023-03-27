import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container mt-3">
      <CarForm />
      <CarSearch />
      <CarList />
    </div>
  );
}

export default App;
