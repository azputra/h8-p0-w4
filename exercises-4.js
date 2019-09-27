function cariModus(arr) {
  // you can only write your code here!
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  var angka = [];
  var jumlahAngka = [];
  for (let i = 0; i < arr.length; i++) {
    var tempAngka = angka.indexOf(arr[i])
    if (tempAngka === -1) {
      angka.push(arr[i]);
      jumlahAngka.push(1);
    } else {
      jumlahAngka[tempAngka]++
    }
  }
  var munculAngkaTerbanyak = 0
  for (let i = 0; i < jumlahAngka.length; i++) {
    if (munculAngkaTerbanyak < jumlahAngka[i]) {
      munculAngkaTerbanyak = jumlahAngka[i]
    }
  }
  var indexJumlahTerbanyak = jumlahAngka.indexOf(munculAngkaTerbanyak)
  if (munculAngkaTerbanyak === 1 || angka.length <= 1) {
    return -1
  }
  return angka[indexJumlahTerbanyak]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1