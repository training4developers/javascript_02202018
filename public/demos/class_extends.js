
class Person {

  constructor(firstName, lastName) {
    this._firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    console.log('getting first name');
    return this._firstName;
  }

  set firstName(value) {
    console.log('setting first name');
    this._firstName = value;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends Person {

  static create(studentId, name) {
    const nameParts = name.split(' ');
    return new Student(studentId, nameParts[0], nameParts[1]);
  }

  constructor(studentId, firstName, lastName) {
    super(firstName, lastName);
    this.studentId = studentId;
  }

  getRecordInfo() {
    return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
  }

  getFullName() {
    return super.getFullName().toUpperCase();
  }

}


// const student1 = new Student(1, 'Bob', 'Smith');
const student1 = Student.create(1, 'Bob Smith');
student1.firstName = 'Seema';
console.log(student1.getFullName());
console.log(student1.getRecordInfo());

console.dir(student1);

