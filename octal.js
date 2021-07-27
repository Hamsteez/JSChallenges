class Octal {
  constructor(string) {
    this.stringNum = string;
  }

  toDecimal() {
    if (isNaN(Number(this.stringNum))) return 0;
    if (this.stringNum.split('').includes('8')) return 0;
    if (this.stringNum.split('').includes('9')) return 0;
    let arrOfNum = this.stringNum.split('').reverse();
    let exponent = 0;
    let octal = 0;
    arrOfNum.forEach(num => {
      octal += (num * (8**exponent));
      exponent++;
    });
    return octal;
  }
}

module.exports = Octal;