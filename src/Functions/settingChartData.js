import { convertDate } from "./convertDate";

export const settingChartData = (setChartData,pricesData)=>{
    console.log("from settingChartDatafeunction,,,chartdata...",pricesData);
    if(pricesData){
        setChartData({
          labels: [1,2,3],
          datasets: [
            {
              label: "asd",
              data: ["mon", "mday"],
              fill: true,
              borderWidth: 2,
              fill: true,
              backgroundColor: "rgba(58, 128, 233,0.1)",
              pointRadius: 0,
              borderColor: "#3a80e9", //line graph color
              tension: 0.25, // this for line graph curve edges
            },
          ],
        });
    }
    
}