import Axios from "axios";

const sendQueryToApi = async (query?: string) => {
  const number = 10;
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/findByIngredients?ingredients=${query}&apiKey=${process.env.REACT_APP_API_KEY}&number=${number}`
    ).catch((error) => error.response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getFilterAllimentaire = async (query?: string) => {
  const number = 10;
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}/complexSearch?diet=${query}&apiKey=${process.env.REACT_APP_API_KEY}&number=${number}`
    ).catch((error) => error.response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getDetailRecette = async (id: number) => {
  try {
    const { data } = await Axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { sendQueryToApi, getFilterAllimentaire, getDetailRecette };
