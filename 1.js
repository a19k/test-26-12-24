

let nums = [2, 7, 11, 15, 2];
let target = 26;

nums.forEach((e_i,i,arr)=>{
    arr.slice(i+1).forEach((e_j,j,arr)=>{
        if(e_j>=e_i && target-e_i===e_j)console.log([i,j+i+1]);
    })
})