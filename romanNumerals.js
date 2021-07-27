class RomanNumeral {
  static ROMAN_NUMERALS = {
    I: 1,
   IV: 4,
    V: 5,
   IX: 9,
    X: 10,
   XL: 40,
    L: 50,
   XC: 90,
    C: 100,
   CD: 400,
    D: 500,
   CM: 900,
    M: 1000,
 }
 constructor(number) {
  this.number = number;
  }

  toRoman() {
    let romanVersion = '';
    let toConvert = this.number;

    Object.values(RomanNumeral.ROMAN_NUMERALS).sort((a,b) => a-b).reverse().forEach(val => {
      Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(letter => {
        if (RomanNumeral.ROMAN_NUMERALS[letter] === val) {
          // let value = RomanNumeral.ROMAN_NUMERALS[numeral];
          let multiplier = Math.floor(toConvert / val);
          let remainder = toConvert % val;
    
          if (multiplier > 0) {
            romanVersion += (letter.repeat(multiplier));
          }
    
          toConvert = remainder;
        }
      });
    });
    return romanVersion;
  }

}

module.exports = RomanNumeral;