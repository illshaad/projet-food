import { createContext, useContext, useState, ReactNode } from "react";

interface ListIngredients {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: SedIngredient[];
  usedIngredients: SedIngredient[];
  unusedIngredients: any[];
  likes: number;
}

interface SedIngredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: string[];
  extendedName?: string;
  image: string;
}

interface IDataFood {
  response: ListIngredients[];
  setResponse: React.Dispatch<React.SetStateAction<any>>;
}

const DataFoodContext = createContext<IDataFood>({
  response: [],
  setResponse: () => {},
});

export const DataFoodProvider = ({ children }: { children: ReactNode }) => {
  const [response, setResponse] = useState<ListIngredients[]>([]);

  return (
    <DataFoodContext.Provider value={{ response, setResponse }}>
      {children}
    </DataFoodContext.Provider>
  );
};

export const useDataFood = (): IDataFood => useContext(DataFoodContext);
