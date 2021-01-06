const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

let newEmployeeArray = [];

function readyNow() {
  //functions to run on ready
  getEmployee(employees);
  $('#displayButton').on('click', function () {
    display(newEmployeeArray);
  }
  );
}

function getEmployee(employee) {
  //pushes new employee object created into newEmployeeArray
  for (let i = 0; i < employees.length; i++) {
    let newEmployee = newEmployeeObject(employee[i]);
    newEmployeeArray.push(newEmployee);
  }
}

function newEmployeeObject(employee) {
  //creates a new object with new employee bonus percentages and calculates total bonus
  let newEmployee = {
    name: employee.name,
    bonusPercentage: calculateBonusPercentage(employee),
    totalCompensation: employee.annualSalary + (calculateBonusPercentage(employee) * employee.annualSalary),
    totalBonus: calculateBonusPercentage(employee) * employee.annualSalary
  };
  return newEmployee;
}

function calculateBonusPercentage(employee) {
  //calculates how much percentage should be added to each employee
  let bonusPercentage = 0;
  let totalBonus = 0;

  switch (employee.reviewRating) {
    case 3:
      bonusPercentage += 4;
      break;
    case 4:
      bonusPercentage += 6;
      break;
    case 5:
      bonusPercentage += 10;
  }
  if (employee.employeeNumber.length < 5) {
    bonusPercentage += 5;
  }
  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }
  return bonusPercentage / 100;
}

function display(employee) {
  //creates employee list on DOM
  for (let i = 0; i < employee.length; i++) {
    $(`#employeeList`).append(`<li><div>
    Name: ${employee[i].name}
    <br>
    Bonus Percentage: ${employee[i].bonusPercentage}
    <br>
    Total Compensation: ${employee[i].totalCompensation}
    <br>
    Total Bonus: ${employee[i].totalBonus}
    </div><br></li>`)
  }
  console.log(employee)
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$(document).ready(readyNow);
