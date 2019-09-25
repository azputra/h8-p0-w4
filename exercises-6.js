function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    const perkalian = [];
    for (let i = 0; i <= angka; i++) {
      let temp = ""
      for (let j = 0; j <= i; j++) {
        if (i * j === angka) {
          temp = i.toString()
          temp += j.toString()
          perkalian.push(temp)
          for (let k = 0; k < perkalian.length; k++) {
            let minimum = perkalian[0].length;
            if (perkalian[k].length < minimum) {
              minimum = perkalian[k].length
            }
            return minimum
          }
        }
      }
    }
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2