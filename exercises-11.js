function shoppingTime(memberId, money) {
    // you can only write your code here!
    if (memberId === undefined){
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    }
    const listMember = {};
    const listBelanja = [];
    // let sisaUang = money;
    const barangDanHarga = [["Sepatu Stacattu", 1500000], ["Baju Zoro", 500000], ["Baju H&N", 250000], ["Sweater Uniklooh", 175000], ["Casing Handphone", 50000]];
    if (memberId === "") {
        return `Mohon maaf, toko X hanya berlaku untuk member saja`;
    } else if (money < 50000) {
        return `Mohon maaf, uang tidak cukup`;
    } else {
        listMember["memberId"] = memberId;
        listMember["money"] = money;
        for (let i = 0; i < barangDanHarga.length; i++) {
            if (money >= barangDanHarga[i][1]) {
                money -= barangDanHarga[i][1];
                // console.log(coba,'ini')
                listBelanja.push(barangDanHarga[i][0])
                // console.log(listBelanja)
                listMember["listPurchased"] = listBelanja
            }
        }
        listMember["changeMoney"] = money;
    }
    return listMember
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja