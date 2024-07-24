let employeeId = 1;

document.addEventListener("DOMContentLoaded", () => {
    const employeeForm = document.getElementById('addNewEmpForm');
    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });
});

function addEmployee() {

    const name = document.getElementById('nameEmployee').value;
    const date = document.getElementById('hiringDateEmp').value;
    const position = document.getElementById('positionEmp').value;
    const salary = document.getElementById('amountSalary').value;

    if (name && date && position && salary) {
        const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell0 = newRow.insertCell(0);
        const cell1 = newRow.insertCell(1);
        const cell2 = newRow.insertCell(2);
        const cell3 = newRow.insertCell(3);
        const cell4 = newRow.insertCell(4);

        cell0.textContent = employeeId++;
        cell1.textContent = name;
        cell2.textContent = date;
        cell3.textContent = position;
        cell4.textContent = salary;

        document.getElementById('addNewEmpForm').reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function deleteFirstEmployee() {
    const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    if (table.rows.length > 0) {
        table.deleteRow(0);
        updateIds();
    } else {
        alert('No hay registros para eliminar.');
    }
}

function deleteLastEmployee() {
    const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    if (table.rows.length > 0) {
        table.deleteRow(table.rows.length - 1);
        updateIds();
    } else {
        alert('No hay registros para eliminar.');
    }
}

function updateIds() {
    const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].textContent = i + 1;
    }
    employeeId = table.rows.length + 1;
}