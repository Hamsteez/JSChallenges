class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (!this.isLegal()) throw new TypeError('not legal sides');
  }

  kind() {
    if (this.isEquilateral()) return 'equilateral';
    if (this.isIsosceles()) return 'isosceles';
    return 'scalene'
  }

  isEquilateral() {
    if (this.side1 === this.side2 && this.side2 === this.side3) return true;
    return false;
  }

  isIsosceles() {
    if (!this.isEquilateral()) {
      if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) return true;
    }
    return false;
  }

  isScalene() {
    if (!this.isIsosceles()) return true;
  }

  isLegal() {
    let arr = [this.side1, this.side2, this.side3];
    let returnVal = true;
    arr.forEach(side => {
      if (side <= 0) returnVal = false;
    });
    if ((arr[0] + arr[1] <= arr[2]) || (arr[1] + arr[2] <= arr[0]) || (arr[0] + arr[2] <= arr[1])) returnVal = false;
    return returnVal;
  }
}

module.exports = Triangle;