

let numRows=5;

function nivoiPaskalovogTrougla(numRows){
    let trougao=new Array(numRows);
    trougao.unshift([1]);

    trougao.forEach((e_i,i,arr)=>{
        if(i>0)arr[i].push(1);
        
        if(i>1)
        arr[i].forEach((e_j,j)=>{
            arr[i].push(arr[i-1][j]+arr[i-1][j+1]);
        }); 
        else arr.push([]); 

        if(i>1)arr[i].push(1);
    });

    trougao.forEach((e,i,arr)=>console.log(e));

}

nivoiPaskalovogTrougla(numRows);
