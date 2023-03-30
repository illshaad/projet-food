import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "animate.css";
import CardComposant from "./Components/card";
import Food from "./Components/food";

function App() {
  const [step, setStep] = useState<number>(0);

  const nextStep = (step: any) => {
    setStep(step);
  };

  const stepComponent = [
    <CardComposant
      key={0}
      titre="Recette"
      subTitle="Donnez une seconde vie à vos ingrédients oubliés"
      nextStep={nextStep}
    />,
    <Food />,
  ];

  return (
    <div className="App">
      <div className="box">{stepComponent[step]}</div>

      {/* <nav>
        <ul>
          <li>
            <Link to={`food`}>Food</Link>
          </li>
          <li>
            <Link to={`ingredients`}>Ingrediens</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default App;
