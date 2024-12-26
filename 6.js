

let niz=[1,2,3,4,5];

let prosjek=niz.reduce((acc,e)=>acc+e)/niz.length;

console.log(niz.filter(e=>e>prosjek));

