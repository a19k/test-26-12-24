

let niz=["Sings","like","thunder"];
let separator="-";

function spoji(niz,separator){
    return niz.reduce((acc,e)=>acc+=separator+e)
}

console.log(spoji(niz,separator));
