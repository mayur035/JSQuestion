// 1
function multiply(x) {
    return function multi(y){
        console.log(x*y)
    }
}
multiply(3)(6)

// 2
let obj={
    id:1,
    name:'Shiddharth',
    age:23,
    role:'FSD'
}
console.log(Object.entries(obj));

// 3
let arr = [43, 56, 23, 1, 66, 106, 89, 68, 2];
let max = Math.max(...arr);
let min = Math.min(...arr);
let swap;

arr.forEach((element, index, array) => {
    if (element === max) {
        swap = max;
        array[index] = min;
        array[arr.indexOf(min)] = swap;
        max = Math.max(...array);
        min = Math.min(...array);
    }
});

console.log("Swapped array:", arr);

// 4
// find index of given userName from array and print the all elements till    
arr=["abc","xyz","pqr","mno","wxy","bcd"]
function findIndex(name){
    console.log(`index of ${name} is ${arr.indexOf(name)}`)
    arr.forEach(element => {
        if(arr.indexOf(element) <= arr.indexOf(name))
            console.log(element)
    });
} 
findIndex("wxy")


// 5
class Employee {
    constructor(id, firstName, lastName, mobile, email, salary, address) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.mobile = mobile;
      this.email = email;
      this.salary = salary;
      this.address = address;
    }
  }
  
  class EmployeeManagementSystem {
    constructor() {
      this.employees = [];
    }
  
    addEmployee(employee) {
      // Check if an employee with the same ID already exists
      const existingEmployee = this.employees.find(emp => emp.id === employee.id);
      if (existingEmployee) {
        console.log("Employee with the same ID already exists. Please provide a unique ID.");
        return;
      }
  
      // Check if an employee with the same email already exists
      const existingEmail = this.employees.find(emp => emp.email === employee.email);
      if (existingEmail) {
        console.log("Employee with the same email already exists. Please provide a unique email.");
        return;
      }
  
      this.employees.push(employee);
      console.log(`Employee with ID ${employee.id} added successfully.`);
    }
  
    printAllEmployees() {
      console.log("Employee Details:");
      this.employees.forEach(employee => {
        console.log(`ID: ${employee.id}, Name: ${employee.firstName} ${employee.lastName}, Mobile: ${employee.mobile}, Email: ${employee.email}, Salary: ${employee.salary}`);
        console.log("Address:", employee.address);
        console.log("--------");
      });
    }
  
    updateEmployeeDetails(id, updatedDetails) {
      const employeeIndex = this.employees.findIndex(emp => emp.id === id);
  
      if (employeeIndex !== -1) {
        // Update only the provided details
        Object.assign(this.employees[employeeIndex], updatedDetails);
        console.log(`Employee with ID ${id} updated successfully.`);
      } else {
        console.log(`Employee with ID ${id} not found.`);
      }
    }
  
    deleteEmployee(id) {
      const employeeIndex = this.employees.findIndex(emp => emp.id === id);
  
      if (employeeIndex !== -1) {
        this.employees.splice(employeeIndex, 1);
        console.log(`Employee with ID ${id} deleted successfully.`);
      } else {
        console.log(`Employee with ID ${id} not found.`);
      }
    }
  }
  
  // Example usage:
  const employeeSystem = new EmployeeManagementSystem();
  
  const employee1 = new Employee(1, "John", "Doe", "1234567890", "john@example.com", 50000, {
    line1: "123 Main Street",
    line2: "Apt 4",
    area: "Business District",
    pincode: "12345",
    city: "Cityville",
    state: "Stateville"
  });
  
  const employee2 = new Employee(2, "Jane", "Smith", "9876543210", "jane@example.com", 60000, {
    line1: "456 Oak Street",
    line2: "Suite 7",
    area: "Residential Area",
    pincode: "54321",
    city: "Townsville",
    state: "Stateland"
  });
  
  employeeSystem.addEmployee(employee1);
  employeeSystem.addEmployee(employee2);
  
  employeeSystem.printAllEmployees();
  
  employeeSystem.updateEmployeeDetails(1, { salary: 55000, mobile: "1112223333" });
  employeeSystem.printAllEmployees();
  
  employeeSystem.deleteEmployee(2);
  employeeSystem.printAllEmployees();

// 6
function checkNumber(num){
    if(num%2==0){
        console.log(`${num} is an even number`);
    }else{
        console.log(`${num} is an odd number`);
    }
}
checkNumber(7)

//7
// return middle char of string and if string is odd then middle and if string is even then middle 2 char in js
function middleChar(word) {
    let len = word.length;

    if (len % 2 === 0) {
        let middle = word.substring(len / 2 - 1, len / 2 + 1);
        return middle;
    } else {
        let middle = word.charAt(Math.floor(len / 2));
        return middle;
    }
}
let result = middleChar("abcd");
console.log(result);


// 8
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// 9
function snakeToCamel(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(snakeToCamel);
    }
  
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
      acc[camelKey] = snakeToCamel(obj[key]);
      return acc;
    }, {});
  }
  
  const snakeCaseObject = {
    first_name: 'Mayur',
    last_name: 'Patel',
    contact_info: {
      email_address: 'abc@example.com',
      phone_number: '123-456-7890'
    }
  };
  
  const camelCaseObject = snakeToCamel(snakeCaseObject);
  console.log(camelCaseObject);
  
//10
function User() {
    let counter = 0; 

    return {
        increment: function() {
            counter++;
        },
        show: function() {
            console.log(counter);
        }
    };
}

const user = User();
user.increment();
user.show();

user.increment();
user.show();
