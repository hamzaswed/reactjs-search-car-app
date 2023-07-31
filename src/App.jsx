import AddCar from "./components/AddCar";
import SearchCar from "./components/SearchCar";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";

export default function App() {
  return (
    <div>
      <AddCar />
      <SearchCar />
      <CarList />
      <CarValue />
    </div>
  );
}
