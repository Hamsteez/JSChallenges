class SumOfMultiples {
  constructor(...list) {
    this.list = list;
  }

  to(boundary) {
    let cntr = 1;
    let multiples = [];
    while (cntr < boundary) {
      this.list.forEach(num => {
        if (cntr % num === 0 && !multiples.includes(cntr)) multiples.push(cntr);
      });
      cntr++;
    }
    return multiples.reduce((accum, current) => accum + current, 0);
  }

  static to(boundary) {
    let obj = new SumOfMultiples(3, 5);
    return obj.to(boundary);
  }
}

// let obj = new SumOfMultiples(43, 47);
// console.log(obj.to(10_000))
module.exports = SumOfMultiples;