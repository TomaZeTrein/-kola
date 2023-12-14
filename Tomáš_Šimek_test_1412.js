class Class {
    constructor(name) {
      this.name = name;
      this.students = [];
    }
  }
  
  class Student {
    constructor(name, age, grades) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
  }
  
  let classes = [
    new Class("Math"),
    new Class("Science"),
    new Class("English")
  ];
  
  function generateRandomGrades() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function addStudent() {
    let name = Test Student ${classes[0].students.length + 1};
    let age = parseInt(prompt("Enter student's age:"));
    if (isNaN(age)) {
      console.log("Problem: Age should be a number.");
      return;
    }
  
    let grades = generateRandomGrades();
    let student = new Student(name, age, grades);
  
    let randomClass = classes[Math.floor(Math.random() * classes.length)];
    randomClass.students.push(student);
  }
  
  function getStudentGradesDiameter() {
    let studentName = prompt("Enter student's name to get grades diameter:");
    let student = findStudent(studentName);
    if (!student) {
      console.log("Problem: Student not found.");
      return;
    }
    console.log(Grade diameter for ${student.name}: ${student.grades});
  }
  
  function getAverageAgeInClass() {
    let className = prompt("Enter class name to get average age:");
    let selectedClass = findClass(className);
    if (!selectedClass) {
      console.log("Problem: Class not found.");
      return;
    }
  
    let totalAge = 0;
    for (let student of selectedClass.students) {
      totalAge += student.age;
    }
  
    const averageAge = totalAge / selectedClass.students.length;
    console.log(Average age in ${selectedClass.name}: ${averageAge});
  }
  
  function findStudent(name) {
    for (let cls of classes) {
      for (let student of cls.students) {
        if (student.name === name) {
          return student;
        }
      }
    }
    return null;
  }
  
  function findClass(name) {
    for (let cls of classes) {
      if (cls.name.toLowerCase() === name.toLowerCase()) {
        return cls;
      }
    }
    return null;
  }
  
  function mainMenu() {
    let choice = prompt(Menu:
    1. Add a student
    2. Get student's grade diameter
    3. Get average age in a class
    Enter your choice:);
  
    switch (choice) {
      case "1":
        addStudent();
        break;
      case "2":
        getStudentGradesDiameter();
        break;
      case "3":
        getAverageAgeInClass();
        break;
      default:
        console.log("Problem: Invalid choice.");
    }
  }
  
  mainMenu();