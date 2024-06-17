import axios from "axios";
import { API_URL } from "../consonants";

export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `${API_URL}/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
      .then((response)=> {
        return response.data[priceType];
      })
      .catch((error) => {
        console.log("coin-price-type => Error>>>", error)
      });
      if(prices) {return prices} else {return []}
}

