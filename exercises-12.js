function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    // you can only write your code here!
    if (shoppers.length < 1) {
        return []
    }
    const result = [];
    for (let i = 0; i < listBarang.length; i++) {
        const listBelanja = {};
        const listPembeli = [];
        let sisaBarang = 0;
        for (let j = 0; j < shoppers.length; j++) {
            if (listBarang[i][0] === shoppers[j]["product"] && listBarang[i][2] >= sisaBarang + shoppers[j]["amount"]) {
                listPembeli.push(shoppers[j]["name"])
                sisaBarang += shoppers[j]["amount"]
                // console.log(sisaBarang)
            }
            listBelanja["product"] = listBarang[i][0];
            listBelanja["shoppers"] = listPembeli;
            listBelanja["leftOver"] = listBarang[i][2] - sisaBarang;
            listBelanja["totalProfit"] = listBarang[i][1] * sisaBarang
        }
        result.push(listBelanja)
    }
    return result
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
//   // [ { product: 'Sepatu Stacattu',
//   //     shoppers: [ 'Windi' ],
//   //     leftOver: 2,
//   //     totalProfit: 12000000 },
//   //   { product: 'Baju Zoro',
//   //     shoppers: [ 'Devi', 'Lisa' ],
//   //     leftOver: 0,
//   //     totalProfit: 1000000 },
//   //   { product: 'Sweater Uniklooh',
//   //     shoppers: [ 'Rani' ],
//   //     leftOver: 0,
//   //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
//   // [ { product: 'Sepatu Stacattu',
//   //     shoppers: [],
//   //     leftOver: 10,
//   //     totalProfit: 0 },
//   //   { product: 'Baju Zoro',
//   //     shoppers: [],
//   //     leftOver: 2,
//   //     totalProfit: 0 },
//   //   { product: 'Sweater Uniklooh',
//   //     shoppers: [],
//   //     leftOver: 1,
//   //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]