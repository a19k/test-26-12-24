// Za niz cijelih brojeva nums i cijeli broj target,
// trebaš vratiti indekse dva broja tako da njihov zbir bude jednak cilju (target).
// Možeš pretpostaviti da svaki ulaz ima tačno jedno rješenje,
// i ne smiješ koristiti isti element dva puta.
// Odgovor može biti vraćen u bilo kojem redoslijedu.
// Primjer:
// Ulaz: nums = [2,7,11,15], target = 9
// Izlaz: [0,1]

const findTarget = ({nums, target}) => {
    const targetIndexes = [];
  
    nums.forEach((num1, i) => {
      nums.forEach((num2, j) => {
        if (num1 + num2 === target && targetIndexes.length === 0) {
          targetIndexes.push(i, j);
        }
      })
    })
  
    return targetIndexes;
  };
  
  console.log(findTarget({nums: [2, 7, 11, 15], target: 9})); // 0 1