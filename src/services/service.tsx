import Axios from "axios";

const sendQueryToApi = async (query?: string) => {
  const number = 50;
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}?ingredients=${query}&apiKey=${process.env.REACT_APP_API_KEY}&number=${number}`
    ).catch((error) => error.response);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { sendQueryToApi };
