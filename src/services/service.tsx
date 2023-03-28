import Axios from "axios";

const sendQueryToApi = async (query: string) => {
  const apiKey = "1e79836c0b844fb7b063c4dc72969867";
  const number = 10;
  const { data } = await Axios.get(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${apiKey}&number=${number}`
  ).catch((error) => error.response);

  return data;
};
export { sendQueryToApi };
