export interface ListIngredients {
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
