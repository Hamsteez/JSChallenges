class Series {
  constructor(string) {
    this.string = string;
  }

  slices(sliceVal) {
    if (sliceVal > this.string.length) throw new TypeError('slice value larger than string length');
    let outerArr = [];
    let innerArr = [];

    let string = this.string.split('');
    for (let idx = 0; idx < string.length - (sliceVal - 1); idx++) {
      for (let inner = 0; inner < sliceVal; inner++) { 
        innerArr.push(Number(string[idx + inner]));
      }
      outerArr.push(innerArr);
      innerArr = [];
    }
    console.log(outerArr);
    return outerArr;
  }
}
let series = new Series('01234');
series.slices(2);
module.exports = Series;