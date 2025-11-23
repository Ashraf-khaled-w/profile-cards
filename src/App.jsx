import React from "react";
import Card from "./components/card";
import { peopleData } from "./data/cardsData";

function App() {
  return (
    <div className="app-container">
      {peopleData.map((person) => (
        <Card key={person.id} person={person} />
      ))}
    </div>
  );
}

export default App;
