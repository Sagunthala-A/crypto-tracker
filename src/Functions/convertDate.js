
export function convertDate(numberDate){
    var date = new Date(numberDate);
    return date.getDate() + '/' + (date.getMonth()+1);
}