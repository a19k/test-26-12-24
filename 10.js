

let niz=[1, 2, 2, 2, 3, 3, 4];

function brojeviPojavljivanjaElemenata(niz){
let pojavljivanja={};
niz.forEach((e,i,arr)=>{
    let pojavljivanjeTrenutnogElementa=arr.reduce((acc,eReduce)=>{
        if(eReduce===e)acc++;
        return acc;
    },0);

    pojavljivanja[e]=[pojavljivanjeTrenutnogElementa];
})

return pojavljivanja;
}


console.log(brojeviPojavljivanjaElemenata(niz));
