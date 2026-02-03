const student = {
 firstName: 'John',
 lastName: 'Doe',
 studentId: '12345',
 courses: [],

// Add a method called getFullName() that returns the full name
 getFullName() {
    return `${this.firstName} ${this.lastName}`;
 },
//Add a method called enrollCourse(courseName) that adds a course to the courses array
 enrollCourse(courseName) {
    this.courses.push(courseName);
 },
//Add a method called getCourseCount() that returns the number of enrolled courses
 getCourseCount() {
    return this.courses.length;
 }
};

console.log(student.getFullName());
student.enrollCourse('CMPS2212');
student.enrollCourse('MATH2210');
console.log(student.getCourseCount()); // Expected: 2

