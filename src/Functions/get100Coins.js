import axios from "axios";
import { API_URL } from "../consonants";

export const get100Coins = async (setError) => {
  try {
    const response = await axios.get(
      `${API_URL}/markets?vs_currency=usd&order=market_cap_desc`
    );
    if(response) return response.data;
  } catch (error) {
    if(setError) setError(error.message);
    console.log("100-coins => error>>>", error);
  }
};
