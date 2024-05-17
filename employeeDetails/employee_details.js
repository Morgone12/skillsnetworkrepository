const employees = [
    { id: 1, name: 'Jhorman Salazar', age: 18, department: 'IT', salary: 10000, specialization: 'Java'},
    { id: 2, name: 'Andres Salazar', age: 34, department: 'HR', salary: 40000, specialization: 'Python'},
    { id: 3, name: 'Jhomin Salazar', age: 20, department: 'Finance', salary: 45000, specialization: 'JavaScript'},
    { id: 4, name: 'Jhormy Salazar', age: 26, department: 'IT', salary: 54000, specialization: 'Go'},
    { id: 5, name: 'Jhormancito Salazar', age: 23, department: 'HR', salary: 60000, specialization: 'JavaScript'},
];

// Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function findEmployeeBySpecialization(employeeSpecialization){
    const foundEmployee = employees.filter(employee => employee.specialization === employeeSpecialization);
    if(foundEmployee){
        const displayEmployeeSpecialization = foundEmployee.map((employee, index) => `<p>${employee.id}:${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} --- ${employee.specialization}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = displayEmployeeSpecialization;
    }
    else {
        alert('There is not employees with that specialization, try another one.');
    }
}



function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Salarios Totales: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}:${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}