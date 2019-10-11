function angkaPrima(angka) {
    // you can only write your code here!
    let result = true;
    if (angka < 2) {
        result = false
    }
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            result = false
        }
    }
    return result
}

// TEST CASES
console.log(angkaPrima(2)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // true
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false