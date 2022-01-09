Array.prototype.checkPrimeNumber = function () {
    for (let i = 0; i < this.length; i++) {
        var currNum = this[i];
        var isPrimeNum = true;
        for (var j = 2; j < currNum; j++) {
            if (currNum % j == 0) {
                isPrimeNum = false;
                break;
            }
        }
        if (isPrimeNum === true) {
            return true;
        }
    }
    return false;
}

// var arr = [1, 3, 5]
// var arr = [2, 4, 10, 15]
var arr = [12, 4, 10, 15]
// var arr = [14, 15, 8, 9]
var para = document.getElementById("result")
para.innerText = arr.checkPrimeNumber();