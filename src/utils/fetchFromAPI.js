import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
  params: {
    maxResults: 50,
  },
});

export const fetchFromAPI = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};
