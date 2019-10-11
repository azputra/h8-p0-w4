function ubahHuruf(kata) {
    // you can only write your code here!
    let result = "";
    for (let j = 0; j < kata.length; j++) {
        var ubahAscii = kata[j].charCodeAt(0)
        if (ubahAscii === 122 || ubahAscii === 90) {
            ubahAscii -= 25
        } else {
            ubahAscii += 1
        }
        var ubahHuruf = String.fromCharCode(ubahAscii)
        result += ubahHuruf
    }
    return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu