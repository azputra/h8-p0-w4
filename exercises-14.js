function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length == 0) {
    return [];
  } else {
    // console.log(arrPenumpang.length)
    const penumpang = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
      const objPenumpang = {};
      objPenumpang["penumpang"] = arrPenumpang[i][0];
      objPenumpang["naikDari"] = arrPenumpang[i][1];
      objPenumpang["tujuan"] = arrPenumpang[i][2];
      let ruteAwal = 0;
      let ruteTujuan = 0;
      for (let j = 0; j < rute.length; j++) {
        if (arrPenumpang[i][1] === rute[j]) {
          ruteAwal = j
        } else if (arrPenumpang[i][2] === rute[j]) {
          ruteTujuan = j
        }
      }
      const biaya = (ruteTujuan - ruteAwal) * 2000
      objPenumpang["bayar"] = biaya
        penumpang.push(objPenumpang);
    }
    return penumpang
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]