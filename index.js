function convertFahrToCelsius(temperature){
    let check  = isNaN(temperature);
    let dataType = Object.prototype.toString.call(temperature).slice(8, -1);
    if (check == false){
        return ((temperature - 32) * 5/9).toFixed(4);
    }else{
        return `${temperature} is not a valid number but a/an ${dataType}`;
    }
}
