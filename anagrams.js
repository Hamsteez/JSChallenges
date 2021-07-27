
class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(arr) {
    let sortedWord = this.word.toLowerCase().split('').sort().join('');
    let resultArr = [];
    arr.forEach(item => {
      let sortItem = item.toLowerCase().split('').sort().join('');
      if (sortItem === sortedWord && this.word.toLowerCase() !== item.toLowerCase()) {
        resultArr.push(item);
      }
    });
    return resultArr;
  }
}

module.exports = Anagram;