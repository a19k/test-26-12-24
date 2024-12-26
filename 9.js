

let niz=[7, 3, 10, 15, 2];

function razlikaMaxMin(niz){
    let max=niz.reduce((acc,e)=>e>acc?acc=e:acc);
    let min=niz.reduce((acc,e)=>e<acc?acc=e:acc);
    
    return max-min;
}

console.log(razlikaMaxMin(niz));
