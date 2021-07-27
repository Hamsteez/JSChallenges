class PerfectNumber {
  static classify(num) {
    let arrOfDivisors = this.findDivisors(num);
    let aliquotSum = arrOfDivisors.reduce((crrnt, accum) => accum + crrnt);
    if (aliquotSum === num) return 'perfect';
    if (aliquotSum < num) return 'deficient';
    return 'abundant';
  }

  static findDivisors(num) {
    let divisor = num - 1;
    let arrOfDivisors = [];
    while (divisor > 0) {
      if (num % divisor === 0) arrOfDivisors.push(divisor);
      divisor--;
    }
    return arrOfDivisors;
  }
}

module.exports = PerfectNumber;