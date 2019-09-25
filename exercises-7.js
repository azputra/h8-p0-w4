function urutkanAbjad(str) {
    // you can only write your code here!
    let result = "";
    const abjad = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < abjad.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (abjad[i] === str[j]) {
                result += str[j]
            }
            // console.log(abjad[i])
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'