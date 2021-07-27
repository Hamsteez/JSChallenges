class Meetup {
  constructor(year, month) {
    this.month = month;
    this.year = year;
    this.dayNum = null;
  }

  static STRINGDAY_TO_NUMDAY  = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
  }

  static SCHEDULE_CONV = {
    first: 1,
    second: 2,
    third: 3, 
    fourth: 4,
    fifth: 5,
    last: '4 or 5',
    teenth: [13, 14, 15, 16, 17, 18, 19],
  }

  static DAYS_IN_A_MONTH = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }

  day(dayOfWeek, schedule) {
    dayOfWeek = dayOfWeek.toLowerCase();
    schedule = schedule.toLowerCase();
    if (schedule === 'last') return this.dayLast(dayOfWeek);
    if (schedule === 'teenth') return this.teenthDay(dayOfWeek);
    let cntr = 1;
    let matcher = Meetup.SCHEDULE_CONV[schedule];
    let occCntr = 0;
    let newDate;
    
    while (occCntr !== matcher) {
      newDate = new Date(`${this.month} ${cntr}, ${this.year}`);
      let getDay = newDate.getDay();
      if (Meetup.STRINGDAY_TO_NUMDAY[getDay] === dayOfWeek) {
        occCntr += 1;
      }
      if (occCntr === matcher) break;
      if (this.month !== 2) {
        if (cntr > Meetup.DAYS_IN_A_MONTH[this.month]) return null;
      } else {
        if (this.checkLeapYear()) {
          if (cntr > 28) return null;
        } else {
          if (cntr > 27) {
            return null;
          }
        }
      }
      
      cntr += 1;
    }
    this.dayNum = cntr;
    // console.log(this.year, this.month, this.dayNum);

    return new Date(this.year, this.month - 1, this.dayNum);
  }

  dayLast(dayOfWeek) {
    let fiveDays = this.day(dayOfWeek, 'fifth');
    if (fiveDays === null) return this.day(dayOfWeek, 'fourth');
    return fiveDays;
  }

  checkLeapYear() {
    return this.year % 4 === 0;
  }

  teenthDay(dayOfWeek) {
    let cntr = 13;
    let newDate;
    while (cntr < 20) {
      newDate = new Date(`${this.month} ${cntr}, ${this.year}`);
      let getDay = newDate.getDay();
      if (Meetup.STRINGDAY_TO_NUMDAY[getDay] === dayOfWeek && Meetup.SCHEDULE_CONV.teenth.includes(cntr)) {
        this.dayNum = cntr;
        return new Date(this.year, this.month - 1, this.dayNum)
      }
      cntr += 1;
    }
    
  }
}
// let meetup = new Meetup(2015, 2);
// console.log(meetup.day('Sunday', 'last').toString());

// let meetup = new Meetup(2020, 2);
// console.log(meetup.day('saturday', 'last').toString());

module.exports = Meetup;