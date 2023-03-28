import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button, Input } from "@nextui-org/react";
import { sendQueryToApi } from "../services/service";

type Flavor = {
  value: string;
  label: string;
};

export default function SelectComponant() {
  const [dataIngrediens, setDataIngrediens] = useState<Flavor[]>([]);
  const [ingredien, setIngredien] = useState<string>("");
  const navigate = useNavigate();
  const handleChange = (options: any) => {
    setIngredien(options.target.value);
  };

  const addIngredien = () => {
    const newIngredient: Flavor = {
      value: ingredien.toLowerCase(),
      label: ingredien,
    };
    setDataIngrediens((prevArray) => [...prevArray, newIngredient]);
  };

  const getValue: string[] = dataIngrediens.map((e) => e?.value);

  const deleteBadge = (badge: string) =>
    setDataIngrediens((prev) => prev.filter((f) => f.value !== badge));

  const formatStringToIngredien = getValue.join("&");

  const request = async () => {
    const response = await sendQueryToApi(formatStringToIngredien);
    if (response) return navigate("/food");
  };

  return (
    <div className="degradeHorizontal">
      <div className="containerFlex">
        <Input
          clearable
          bordered
          onChange={(e) => handleChange(e)}
          placeholder={"tomate, fromage...."}
        />
        <div>
          <Button onPress={() => addIngredien()} size="sm">
            Ajouter
          </Button>
        </div>
      </div>

      {dataIngrediens.length > 0 && (
        <div className="flexElementBadge">
          {dataIngrediens.map(({ value }) => (
            <div className="badge">
              <Badge onClick={() => deleteBadge(value)} isSquared>
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
          disabled={!dataIngrediens.length}
          onPress={() => request()}
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

//    style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
