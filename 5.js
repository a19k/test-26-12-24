

let numRows = 6;

function nivoiPaskalovogTrougla(numRows) {
    let trougao = Array.from({ length: numRows }, () => []);
    if (numRows > 0) trougao[0][0] = 1;


    trougao.forEach((e_i, i, arr) => {
        if (i > 0) arr[i].push(1);

        if (i > 1)
            trougao.forEach((e,j)=>{
                if(j!==0 && j<i)
                arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j]);
            });

        if (i > 0) arr[i].push(1);
    });

    trougao.forEach((e, i, arr) => console.log(e));

}

nivoiPaskalovogTrougla(numRows);
