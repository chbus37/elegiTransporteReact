import "./App.css";
import Card from "./components/Card";

import vehicles from "./data/vehicles";


function App() {
  const vehicleList = vehicles.map(vehicle => {
    return <Card titulo={vehicle.name} descripcion={vehicle.description} />
  })
  return (
    <>
      <h1>Elegi tu Transporte</h1>
      <div className="container">
        {vehicleList}
      </div>
      
    </>
  );
}

export default App;
