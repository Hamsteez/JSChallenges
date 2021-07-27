
class BeerSong {
  static verse(list) {
    let verse = this.generateOneVerse(list);
    return verse;
  }

  static verses(...list) {
    let verses = this.generateMultipleVerses(list);
    return verses;
  }

  static generateOneVerse(verseNum) {
    let numMinusOne = verseNum - 1;
    let string = '';

    if (verseNum === 0) {
      string = "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";
    } else if (verseNum === 2) {
      string = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer " +
      "on the wall.\n";
    } else if (verseNum === 1) {
      string = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.\n";
    } else {
      string = `${verseNum} bottles of beer on the wall, ${verseNum} bottles of beer.\n` +
      `Take one down and pass it around, ${numMinusOne} bottles of beer ` +
      `on the wall.\n`;
    }

    return string;
  }

  static generateMultipleVerses(arr) {
    let difference = arr.reduce((accum, current) => accum - current);
    let arrOfVerses;
    let newArr = [];
    if (difference === 1) {
      arrOfVerses = arr.map(verseNum => this.generateOneVerse(verseNum));
    } else {
      newArr = [];
      let cntr = arr[1];
      while (cntr <= arr[0]) {
        newArr.push(cntr);
        cntr++;
      }
      newArr.reverse();
      arrOfVerses = newArr.map(verseNum => this.generateOneVerse(verseNum));
    }
    return arrOfVerses.join('\n');
  }

  static lyrics() {
    let wholeSong = this.generateMultipleVerses([99, 0]);
    return wholeSong;
  }
}

module.exports = BeerSong;