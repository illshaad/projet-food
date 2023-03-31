import React from "react";
import { Checkbox } from "@nextui-org/react";
import { useDataFood } from "../context/context";
import { getFilterAllimentaire } from "../services/service";

export default function FilterComponent() {
  const { setResponse } = useDataFood();

  const filterAllimentaire = async (e: string[]) => {
    console.log(e);

    // const res = await getFilterAllimentaire(e[0]);
    // console.log(res);
  };

  return (
    <Checkbox.Group
      onChange={(e) => filterAllimentaire(e)}
      label="Choissisez votre type de regime allimentaire"
      orientation="horizontal"
      color="secondary"
    >
      <Checkbox value="gluten">Sans gluten</Checkbox>
      <Checkbox value="vegetarian">Vegeterien</Checkbox>
      <Checkbox value="vegan">Vegan</Checkbox>
    </Checkbox.Group>
  );
}
