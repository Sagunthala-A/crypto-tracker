
// export const convertNumber = (number=0)=>{
//     let strNum = number.toString();
//     if(number < 1000){
//         if(number >= 1) return Math.round(number);
//         return number;
//     }
//     else if(number < 10000){
//         return `${strNum.slice(0,1)}.${strNum.slice(1,3)}K`
//     }
//     else if(number < 100000){
//         return `${strNum.slice(0, 2)}.${strNum.slice(2, 4)}K`;
//     }
//     else if(number < 1000000){
//         return `${strNum.slice(0, 3)}.${strNum.slice(3, 5)}K`;
//     }
//     else if(number < 10000000){
//         return `${strNum.slice(0, 1)}.${strNum.slice(1, 3)}M`;
//     }
//     else if (number < 100000000) {
//         return `${strNum.slice(0, 2)}.${strNum.slice(2, 4)}M`;
//     }
//     else if (number < 1000000000) {
//         return `${strNum.slice(0, 3)}.${strNum.slice(3, 5)}M`;
//     }
//     else if (number < 10000000000){
//         return `${strNum.slice(0, 1)}.${strNum.slice(1, 3)}B`;
//     }
//     else if (number < 100000000000) {
//         return `${strNum.slice(0, 2)}.${strNum.slice(2, 4)}B`;
//     }
//     else if (number < 1000000000000) {
//         return `${strNum.slice(0, 3)}.${strNum.slice(3, 5)}B`;
//     }
//     return number;
// }

export const convertNumber = (number = 0) => {
    if(number < 1000){
        if(number >= 1) return Math.round(number);
        return number.toFixed(3);
    }
   else if (number < 1000000) {
    return (number / 1000).toFixed(2) + "K";
  } else if (number < 1000000000) {
    return (number / 1000000).toFixed(2) + "M";
  } else if (number < 1000000000000) {
    return (number / 1000000000).toFixed(2) + "B";
  } else {
    return (number / 1000000000000).toFixed(2) + "T";
  }
  return -10;
};