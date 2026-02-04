//Create a person object with properties: species ('Human') and a method breathe()
const person = {
 species: 'Human',
 breathe() {
 return 'Breathing...';
 }
};
// Create an employee object that inherits from person, add: company and position
//properties

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

// Create a manager object that inherits from employee, add: department and team (array)
//properties

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

// Add a method to manager called addTeamMember(name) that adds to the team array
manager.addTeamMember = function(name) {
 // Your code here
 this.team.push(name)
};

// Own property (manager)
console.log(manager.department);  // 'Engineering'

// Own property (manager)
manager.addTeamMember('Alice');
console.log(manager.team);        // ['Alice']

// Inherited from employee
console.log(manager.company);     // 'Tech Corp'
console.log(manager.position);    // 'Developer'

// Inherited from person
console.log(manager.species);     // 'Human'
console.log(manager.breathe());   // 'Breathing...'