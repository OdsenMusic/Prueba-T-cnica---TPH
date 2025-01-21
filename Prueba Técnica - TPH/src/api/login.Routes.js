import { post } from "./apiCall.Constructors";

const register = async (req, res) => {
  const { email, password } = req.body;
  const apiUrl = `${process.env.API_URL}/register`;
  const data = { email, password };
  const response = await post(apiUrl, null, data);
  if (response.ok) {
    res.status(201).json(response.data);
  } else {
    res.status(response.status).json(response.data);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const apiUrl = `${process.env.API_URL}/login`;
  const data = { email, password };
  const response = await post(apiUrl, null, data);
  if (response.ok) {
    res.status(200).json(response.data);
  } else {
    res.status(response.status).json(response.data);
  }
};
