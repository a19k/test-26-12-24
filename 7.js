

let matrica = [
[1, 2, 3],
[4, 5, 6], 
[7, 8, 9]
];


let transponovana=[];
matrica.forEach(e=>transponovana.push([]));


matrica.forEach((e_i,i,arr)=>{
    arr[i].forEach((e_j,j,arr)=>{
        transponovana[j].push(e_j);
    })
})

console.log(transponovana);

