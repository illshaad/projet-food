import { createContext, useContext, useState, ReactNode } from "react";
import { ListIngredients } from "../types/type";

interface IDataFood {
  response: Array<ListIngredients>;
  setResponse: React.Dispatch<React.SetStateAction<any>>;
  recipe: ListIngredients;
  setRecipe: React.Dispatch<React.SetStateAction<any>>;
}

const DataFoodContext = createContext<IDataFood>({
  response: [],
  setResponse: () => {},
  recipe: {
    id: 0,
    title: "",
    image: "",
    imageType: "",
    usedIngredientCount: 0,
    missedIngredientCount: 0,
    missedIngredients: [],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 0,
  },
  setRecipe: () => {},
});

export const DataFoodProvider = ({ children }: { children: ReactNode }) => {
  const [response, setResponse] = useState<ListIngredients[]>([]);
  const [recipe, setRecipe] = useState<ListIngredients>({
    id: 0,
    title: "",
    image: "",
    imageType: "",
    usedIngredientCount: 0,
    missedIngredientCount: 0,
    missedIngredients: [],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 0,
  });

  return (
    <DataFoodContext.Provider
      value={{ response, setResponse, recipe, setRecipe }}
    >
      {children}
    </DataFoodContext.Provider>
  );
};

export const useDataFood = (): IDataFood => useContext(DataFoodContext);
