class Scrabble {
  static SCORES = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10,
  }

  constructor(string) {
    this.string = string;
  }

  score() {
    if (this.string === null) {
      return 0;
    } else {
      this.string = this.string.toLowerCase();
      let score = 0;
      let stringArr = this.string.split('');
      let arrOfLetters = Object.keys(Scrabble.SCORES);
      stringArr.forEach(letter => {
        if (arrOfLetters.includes(letter)) score += Scrabble.SCORES[letter];
      })
      return score;
    }
    
  }

  static score(string) {
    if (string === null) {
      return 0;
    } else {
      let score = 0;
      let stringArr = string.split('');
      let arrOfLetters = Object.keys(Scrabble.SCORES);
      stringArr.forEach(letter => {
        if (arrOfLetters.includes(letter)) score += Scrabble.SCORES[letter];
      })
      return score;
    }
    
  }
}

module.exports = Scrabble;