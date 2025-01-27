import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
 
  return (
    <ul className="cards">
      {plants.map((p) => {
       return (<PlantCard
        key={p.id}
        plant={p}
        />)
      }) 
    }</ul>
  );
}

export default PlantList;
