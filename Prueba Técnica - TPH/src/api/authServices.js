import { post } from "./apiCall.Constructors";
import { setStorageItem } from "../utils/localStorage";

export const register = async (data) => {
  try {
    const apiUrl = `/api/register`;
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
