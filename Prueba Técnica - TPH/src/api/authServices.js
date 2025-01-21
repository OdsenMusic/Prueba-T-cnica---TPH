import { post } from "./apiCall.Constructors";
import { setStorageItem } from "../utils/localStorage";

export const register = async (req, res) => {
  const { email, password } = req.body;
  const apiUrl = `${process.env.API_URL}/register`;
  const data = { email, password };
  const response = await post(apiUrl, null, data);

  console.log(response);

  if (response.ok) {
    return response;
  } else {
    res.status(response.status).json(response.data);
  }
};

export const login = async (data) => {
  try {
    const apiUrl = `/api/login`;
    const response = await post(apiUrl, null, data);

    if (response.ok) {
      setStorageItem("token", response.data.token);
    }

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
