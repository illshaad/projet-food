import React, { useState } from "react";
import { Text } from "@nextui-org/react";
import "./App.css";
import "animate.css";
import CardComposant from "./Components/card";
import Food from "./Components/food";
import { useDataFood } from "./context/context";
import FilterComponent from "./Components/filter";
import Ingredient from "./Components/ingredients";

function App() {
  const { response } = useDataFood();
  const [step, setStep] = useState<number>(0);

  const nextStep = (step: number) => {
    setStep(step);
  };

  const stepComponent = [
    <CardComposant
      key={0}
      titre="Recette"
      subTitle="Donnez une seconde vie à vos ingrédients oubliés"
      nextStep={nextStep}
    />,
    <>
      {/* <Text>Nombre de plats trouvées {response.length}</Text> */}
      <FilterComponent />
      <Food key={1} nextStep={nextStep} />,
    </>,
    <Ingredient />,
  ];

  return (
    <div className="App">
      <div className="box">{stepComponent[step]}</div>
    </div>
  );
}

export default App;
