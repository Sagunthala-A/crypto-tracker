import axios from "axios";
import { API_URL } from "../consonants";
import { convertCoinData } from "./convertCoinDataFormat";

export async function getCoinData(id, setCoinData, setIsLoading) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    convertCoinData(response.data, setCoinData);
  } catch (e) {
    console.error("coin-data => Error>>>", e);
    setIsLoading(false);
    // return [];
  }

}

