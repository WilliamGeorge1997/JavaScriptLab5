//Parent class

class Person {
  #healthRate = 100;
  constructor(name, age, money) {
    this.name = name,
     this.age = age
     this.money = money
  }

  get healthRate() {
        return this.#healthRate
      }
    
      set healthRate(value) {
        this.#healthRate = value
        if (value > 100) this.#healthRate = 100
      }
  
  sleep(hours) {
    if (hours === 7) {
      this.workMood = "Happy";
    } else if (hours < 7) {
      this.workMood = "Tired";
    } else {
      this.workMood = "Lazy";
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}
//-------------------------------------------------------------------------
//Child class

class Employee extends Person {
  constructor(name, age, id, email, salary, isManager, workMood) {
   super(name, age)
    this.id = id;
    this.email = email;
    this.salary = salary >= 1000 ? salary : 1000;
    this.isManager = isManager;
    this.workMood = workMood;
  }
  work(hours) {
    if (hours === 8) {
      this.workMood = "Happy";
    } else if (hours > 8) {
      this.workMood = "Tired";
    } else {
      this.workMood = "Lazy";
    }
  }
}
//-------------------------------------------------------------------------
//Office class

class Office {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployee(empId) {
    const employee = this.employees.find((emp) => emp.id === empId);
    if (employee) {
      if (employee.isManager) {
        return {
          id: employee.id,
          email: employee.email,
          workMood: employee.workMood,
          isManager: true,
          healthRate: employee.healthRate,
        };
      } else {
        return employee;
      }
    }
    return null;
  }

  hire(employee) {
    this.employees.push(employee);
  }

  fire(empId) {
    this.employees = this.employees.filter((emp) => emp.id !== empId);
  }
}



//-------------------------------------------------------------------------------------------
//User prompt

const office = new Office("Office1");

while (true) {
  const option = prompt(
    "Menu:\n1. Add new employee (enter 'add')\n2. Quit (enter 'q')\nEnter your choice:"
  );

  if (option === "add") {
    const name = prompt("Enter name:");
    const age = prompt("Enter age:");
    const id = prompt("Enter ID:");
    const email = prompt("Enter email:");
    const salary = prompt("Enter salary:");
    const isManager = confirm("Is the employee a manager? \n If manager press 'Ok' \n If normal employee press 'Cancel':") ;

    const employee1 = new Employee(name, age, id, email, salary, isManager);
    office.hire(employee1);
    alert("Employee added successfully.");
  } else if (option === "q") {
    alert("Quitting the application...");
    break;
  } else {
    alert("Invalid option. Please try again.");
  }
}
