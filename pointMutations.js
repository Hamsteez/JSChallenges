class DNA {
  constructor(strand1) {
    this.strand1 = strand1;
  }

  hammingDistance(strand2) {
    let strand1 = this.strand1;
    let shorter;
    let numOfDifferences = 0;
    if (strand1.length < strand2.length) shorter = strand1.length;
    else shorter = strand2.length;
    for (let idx = 0; idx < shorter; idx++) {
      if (strand1[idx] !== strand2[idx]) numOfDifferences++;
    }
    return numOfDifferences;
  }
}
module.exports = DNA;