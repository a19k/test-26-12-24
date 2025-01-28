// Napiši funkciju koja pronalazi najduži zajednički prefiks među nizom stringova.
// Ako ne postoji zajednički prefiks, vrati prazan string "".
// Primjer:
// Ulaz: strs = ["flower", "flow", "flight"]
// Izlaz: "fl"

const findLargetsPrefix = (sentence) => {
    const wordToCompare = sentence[0]; // 'flower'
    let longestPrefix = '';
    const indexes = Array.from({length: wordToCompare.length}, (_, i) => i);
  
    console.log(indexes);
    
    indexes.forEach(index => {
      const currentLetter = wordToCompare[index]; // f
      let matchingCounter = 0;
      sentence.forEach(word => {
        if (word[index] === currentLetter) matchingCounter++;
      })
  
      if (matchingCounter === sentence.length) longestPrefix += currentLetter;
    })
  
    return longestPrefix;
  }
  
  console.log(findLargetsPrefix(["flower", "flow", "flight"]));
  
  // const getLongestPrefix = (sentence) => {
  //   let longestPrefix = ''
  //   let matchingLetterCounter = 0
  //   let letters = sentence[0].split('')
  
  //   letters.forEach((letter, i) => {
  //     sentence.forEach(word => {
  //       if (word[i] === letter) matchingLetterCounter++
  //     })
  
  //     if (matchingLetterCounter === sentence.length) longestPrefix += letter
  
  //     matchingLetterCounter = 0
  //   })
  
  //   return longestPrefix
  
  // }
  
  // console.log(getLongestPrefix(["flower", "flow", "flight"]))
  // console.log(getLongestPrefix(["fower", "fow", "fight"]))
  // console.log(getLongestPrefix(["flower", "flower", "flower"]))