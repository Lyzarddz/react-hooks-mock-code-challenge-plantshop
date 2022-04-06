import React, {useState, useEffect}  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]= useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((data) => {
      setPlants(data)
    }) 

  }, [])

  function handleAddPlant(newPlant) {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }
  
  const listToDisplay = plants.filter(plant=> plant.name.toLowerCase().includes(search.toLowerCase()))

  

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={listToDisplay} />
    </main>
  );
}

export default PlantPage;
