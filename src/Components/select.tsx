import React, { useState } from "react";
import { Badge, Button, Input } from "@nextui-org/react";
import { sendQueryToApi } from "../services/service";
import { useDataFood } from "../context/context";

import { useQuery } from "@tanstack/react-query";

type Flavor = {
  value: string;
  label: string;
};

export default function SelectComponant({ nextStep }: { nextStep: any }) {
  const { setResponse } = useDataFood();
  const [dataIngrediens, setDataIngrediens] = useState<Flavor[]>([]);
  const [ingredien, setIngredien] = useState<string>("");
  const handleChange = (options: any) => {
    setIngredien(options.target.value);
  };
  const addIngredien = () => {
    const newIngredient: Flavor = {
      value: ingredien.toLowerCase(),
      label: ingredien,
    };
    setIngredien("");
    setDataIngrediens((prevArray) => [...prevArray, newIngredient]);
  };

  const getValue: string[] = dataIngrediens.map((e) => e?.value);

  const deleteBadge = (badge: string) =>
    setDataIngrediens((prev) => prev.filter((f) => f.value !== badge));

  const formatStringToIngredien = getValue.join("&");

  const getIngredients = async () => {
    const res = await sendQueryToApi(formatStringToIngredien);

    if (res) {
      setResponse(res);
      return nextStep(1);
    }
  };

  useQuery({
    queryKey: ["ingredients"],
    queryFn: () => getIngredients(),
    enabled: false,
  });

  return (
    <div className="degradeHorizontal">
      <div className="containerFlex">
        <Input
          clearable
          bordered
          onChange={(e) => handleChange(e)}
          placeholder={"tomate, fromage...."}
          value={ingredien}
        />
        <div>
          <Button onPress={() => addIngredien()} size="sm">
            Ajouter
          </Button>
        </div>
      </div>

      {dataIngrediens.length > 0 && (
        <div className="flexElementBadge">
          {dataIngrediens.map(({ value }, index) => (
            <div className="badge">
              <Badge key={index} onClick={() => deleteBadge(value)} isSquared>
                {value}
              </Badge>
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Button
          onClick={() => getIngredients()}
          disabled={!dataIngrediens.length}
          css={{
            fontWeight: "bold",
            background: "$blue600",
          }}
          auto
          size="sm"
        >
          Rechercher
        </Button>
      </div>
    </div>
  );
}
