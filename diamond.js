
class Diamond {
  static makeDiamond(letter) {
    let arrOfLetters = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('').sort();
    let str = '';
    let ctr = 1;
    
    if (letter === 'A') {
      str = 'A\n';
      return str;
    }
    let idxVal = arrOfLetters.indexOf(letter) + 1;
    let lineLength = (idxVal * 2) - 1;
    let spaceCtrLeftRight = Math.floor(lineLength / 2);
    let spaceCtrMiddle = -1;

    str += `${' '.repeat(spaceCtrLeftRight)}A${' '.repeat(spaceCtrLeftRight)}\n`
    while (ctr < idxVal) {
      spaceCtrLeftRight -= 1;
      spaceCtrMiddle += 2;
      str += `${' '.repeat(spaceCtrLeftRight)}${arrOfLetters[ctr]}${' '.repeat(spaceCtrMiddle)}${arrOfLetters[ctr]}${' '.repeat(spaceCtrLeftRight)}\n`
      ctr++;
    }
    ctr = arrOfLetters.indexOf(letter) - 1;
    
    while (ctr > 0) {
      spaceCtrLeftRight += 1;
      spaceCtrMiddle -= 2;
      str += `${' '.repeat(spaceCtrLeftRight)}${arrOfLetters[ctr]}${' '.repeat(spaceCtrMiddle)}${arrOfLetters[ctr]}${' '.repeat(spaceCtrLeftRight)}\n`
      ctr--;
    }
    spaceCtrLeftRight++;
    str += `${' '.repeat(spaceCtrLeftRight)}A${' '.repeat(spaceCtrLeftRight)}\n`
    return str;
  }
}

// let answer = Diamond.makeDiamond('E');
// console.log(answer);
module.exports = Diamond;