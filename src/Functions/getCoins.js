import axios from 'axios';


export const getCoins = async (setData) => {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
        setData(response.data);
    } catch (error) {
        console.log("error>>>", error);
    }
}