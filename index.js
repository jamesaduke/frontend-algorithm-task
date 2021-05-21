function convertFahrToCelsius(temperature){
    let check  = isNaN(temperature);
    let dataType = Object.prototype.toString.call(temperature).slice(8, -1);
    if (check == false){
        return ((temperature - 32) * 5/9).toFixed(4);
    }else{
        return `${temperature} is not a valid number but a/an ${dataType}`;
    }
}


function checkYuGiOh(n){
    if (isNaN(n)){
        return (`invalid parameter: "${n}"`)
    }
    let arr = [];

    for (i = 1; i<=n; i++){
        if(i%2 === 0 && i %3 === 0 && i % 5 ===0){
            arr.push("yu-gi-oh");
        }else if(i%2 === 0 && i %3 === 0){
            arr.push("yu-gi");
        }else if(i %3 === 0 && i % 5 ===0){
            arr.push("gi-oh");
        } else if(i %2=== 0 && i % 5 ===0){
            arr.push("yu-oh");
        }else if(i % 2 === 0){
            arr.push("yu");
        }else if(i % 3 === 0){
            arr.push("gi");
        }else if(i % 5 === 0){
            arr.push("oh");
        }else{
            arr.push(i)
        }
    }
    return arr;
}
