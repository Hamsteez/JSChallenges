class Clock {
  constructor(hour = null, min = null, time = null) {
    this.hour = hour;
    this.min = min;
    this.time = time;
  }

  toString() {
    return this.returnTime();
  }

  static at(hour, min = 0) {
    this.hour = hour;
    this.min = min;
    return new Clock(hour, min);
  }

  isEqual(clock) {
    if (this.toString() === clock.toString()) return true;
    return false;
  }

  subtract(subMins) {
    let subHours = 0;
    if (subMins < this.min) {
      this.min -= subMins;
    } else if (subMins < 60) {
      subMins = subMins - this.min;
      subMins = 60 - subMins;
      if (this.hour > 0) {
        this.hour -= 1;
      } else {
        this.hour = 23;
      }
      this.min = subMins;
    } else {
      subHours = Math.floor(subMins / 60);
      subMins = subMins % 60;
      this.min = Number(this.min);
      this.hour = Number(this.hour);
      if (subHours < this.hour) {
        this.hour -= subHours;
      } else {
        subHours -= this.hour;
        while (subHours > 24) subHours -= 24;
        this.hour = 24 - subHours;
      }
      this.subtract(subMins);
    }
    return this.returnTime();
  }

  add(addMins) {
    let addHours = 0;
    this.min = Number(this.min);
    this.hour = Number(this.hour);
    if (addMins < 60) {
      if ((addMins + this.min) < 60) {
        this.min += addMins;
      }
     } else {
        addMins += this.min;
        addHours = Math.floor(addMins / 60);
        addMins = addMins % 60;
        if (addHours + this.hour > 23) {
          addHours -= (24 - this.hour);
          while (addHours > 24) addHours -= 24;
          this.hour = addHours;
        } else {
          this.hour += addHours;
        }


        this.min = addMins;
      }
    
    return this.returnTime();
  }

  returnTime() {
    let time = '';
    (this.hour < 10) ? time = `0${this.hour}:` : time = `${this.hour}:`;
    (this.min < 10) ? time += `0${this.min}` : time += `${this.min}`;
    // console.log(time);
    this.time = time;
    return this.time;
  }
}

module.exports = Clock;

/*
at(hour, min) --> if hour only: spit out hour with 0 minutes. if hour or minute is single digit, put 0 before hour. 
at(8): 08:00
at(11, 9): 11:09
at(6, 54): 06:54

add(addMins) --> take time given from the at() method and add minutes to it. 
  if addmins is less then 60, then check whether min + addMins is less than 60, if it is, add it and return that num for min
  if it isnt, then add min + addMins; divide that num by 60, get the nondecimal num, that will be what you add to the hours portion,
    then take the decimal portion, multiply it by 60 and repeat this process.

sub(subMins) --> 
  a) if subMins is less than min, then subtract ut and return that value as min.
  b) if subMins < 60 and greater than min: subtract subMins - min = remaingMins, do 60 - remainingMins = finMins, subtract hour by 1, 
    return finMins
  c) if subMins > 60: subMins / 60, take nondecimal part and subtract it that num from the hours. 
    if nondecimal < hour: take hour - nondecimal: return that num for hours
    if not: take nondecimal - hour, check if it is greater than 24, keep subtracting 24, until it is less than 24.
      Then take 24 - thatNumber and return that as hours.
      */