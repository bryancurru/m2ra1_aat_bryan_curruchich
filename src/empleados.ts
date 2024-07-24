const employeeId: number = 1;

document.addEventListener("DOMContentLoaded", () => {
    const employeeForm: HTMLElement | null = document.getElementById('addNewEmpForm');
    employeeForm?.addEventListener('submit', function(event: Event) {
        event.preventDefault();
    });
});

function addEmployee(): void {
    const name: string = (document.getElementById('nameEmployee') as HTMLInputElement).value;
    const date: string = (document.getElementById('hiringDateEmp') as HTMLInputElement).value;
    const position: string = (document.getElementById('positionEmp') as HTMLInputElement).value;
    const salary: string = (document.getElementById('amountSalary') as HTMLInputElement).value;

    if (name && date && position && salary) {
        const table: HTMLTableElement = document.getElementById('employeeTable')!.getElementsByTagName('tbody')[0];
        const newRow: HTMLTableRowElement = table.insertRow();

        const cell0: HTMLTableCellElement = newRow.insertCell(0);
        const cell1: HTMLTableCellElement = newRow.insertCell(1);
        const cell2: HTMLTableCellElement = newRow.insertCell(2);
        const cell3: HTMLTableCellElement = newRow.insertCell(3);
        const cell4: HTMLTableCellElement = newRow.insertCell(4);

        cell0.textContent = String(employeeId++);
        cell1.textContent = name;
        cell2.textContent = date;
        cell3.textContent = position;
        cell4.textContent = salary;

        document.getElementById('addNewEmpForm')?.reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function deleteFirstEmployee(): void {
    const table: HTMLTableElement = document.getElementById('employeeTable')!.getElementsByTagName('tbody')[0];
    if (table.rows.length > 0) {
        table.deleteRow(0);
        updateIds();
    } else {
        alert('No hay registros para eliminar.');
    }
}

function deleteLastEmployee(): void {
    const table: HTMLTableElement = document.getElementById('employeeTable')!.getElementsByTagName('tbody')[0];
    if (table.rows.length > 0) {
        table.deleteRow(table.rows.length - 1);
        updateIds();
    } else {
        alert('No hay registros para eliminar.');
    }
}

function updateIds(): void {
    const table: HTMLTableElement = document.getElementById('employeeTable')!.getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].textContent = String(i + 1);
    }
    employeeId = table.rows.length + 1;
}