let employees = [];

// Add Employee
function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    if (name === "" || id === "" || salary === "" || department === "") {
        alert("Please fill all fields!");
        return;
    }

    employees.push({
        name: name,
        id: id,
        salary: salary,
        department: department
    });

    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}

// Display All Employees
function displayEmployees() {

    let output = "<h2>All Employees</h2>";

    employees.forEach(emp => {
        output += `
            <div class="employee">
                Name: ${emp.name} |
                ID: ${emp.id} |
                Salary: ₹${emp.salary} |
                Dept: ${emp.department}
            </div>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

// Salary > 50000
function salaryAbove50000() {

    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h2>Employees with Salary > 50000</h2>";

    filtered.forEach(emp => {
        output += `
            <div class="employee">
                Name: ${emp.name} |
                Salary: ₹${emp.salary}
            </div>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

// Total Salary
function totalSalary() {

    let total = employees.reduce(
        (sum, emp) => sum + emp.salary,
        0
    );

    document.getElementById("output").innerHTML =
        `<h2>Total Salary = ₹${total}</h2>`;
}

// Average Salary
function averageSalary() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML =
            "<h2>No Employees Found</h2>";
        return;
    }

    let total = employees.reduce(
        (sum, emp) => sum + emp.salary,
        0
    );

    let average = total / employees.length;

    document.getElementById("output").innerHTML =
        `<h2>Average Salary = ₹${average.toFixed(2)}</h2>`;
}

// Count by Department
function countDepartment() {

    let deptCount = {};

    employees.forEach(emp => {

        if (deptCount[emp.department]) {
            deptCount[emp.department]++;
        } else {
            deptCount[emp.department] = 1;
        }

    });

    let output = "<h2>Department Count</h2>";

    for (let dept in deptCount) {
        output += `
            <div class="employee">
                ${dept} : ${deptCount[dept]}
            </div>
        `;
    }

    document.getElementById("output").innerHTML = output;
}