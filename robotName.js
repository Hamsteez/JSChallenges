
class Robot {
  constructor() {
    this.myName = false;
  }

  static ALL_NAMES = [];

  name() {
    if (this.myName) {
      return this.myName;
    }
    while (true) {
      this.myName = this.generateRndmName();
      if (!Robot.ALL_NAMES.includes(this.myName)) {
        Robot.ALL_NAMES.push(this.myName);
        break;
      }
    }
    
    return this.myName;
  }

  generateRndmName() {
    let arrOfLetters = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
    let string = '';
    string += arrOfLetters[Math.floor(Math.random() * 26)];
    string += arrOfLetters[Math.floor(Math.random() * 26)];
    string += Math.floor(Math.random() * 10);
    string += Math.floor(Math.random() * 10);
    string += Math.floor(Math.random() * 10);
    return string;
  }

  reset() {
    if (!this.myName) throw new TypeError('cannot reset an unset name');
    let idxOfName = Robot.ALL_NAMES.indexOf(this.myName);
    Robot.ALL_NAMES.splice(idxOfName, 1);
    this.myName = false;
  }
}

// let robot1 = new Robot();
// robot1.reset();
module.exports = Robot;

/*
when creating a new robot name, should not exist already, should not have name.
string: 2 letters, 3 digits
method of name() in class Robot
once we call name(), if we call it again, it should have the same name from
  first creation, not create a new name.
reset() method that resets the name to a new name that doesnt already exist
need static array to track list of all used names
when we reset a name, we can delete the name or keep it in the static array.

name() -> 
first check if robot has a name created for itself.
create a string called 'name'. Select a random letter twice and append it to
  'name'. Then append 3 random digits to 'name'. Then check if 'name' exists
  in ALL_NAMES array. If it does, repeat process until it doesnt exist.
helper function to get random letters and numbers:
  create arr of letters, get a random number from 0-25 and select an idx from
    the arr of letters.
  get random num from 0-9 and repeat 3 times.
  */