function calculateSalary() {
    var baseSalary = parseFloat(document.getElementById("baseSalary").value);
    var yearsWorked = parseFloat(document.getElementById("yearsWorked").value);
    var monthsWorked = parseFloat(document.getElementById("monthsWorked").value);
    var pendingSalary = parseFloat(document.getElementById("pendingSalary").value);
    var debts = parseFloat(document.getElementById("debts").value);
    // Bono 14 y Aginaldo
    var christmasBonus = (baseSalary / 12) * monthsWorked;
    var proportionalBonus = (baseSalary / 12) * monthsWorked;
    var totalSalary = ((baseSalary * yearsWorked) + proportionalBonus + christmasBonus + pendingSalary) - debts;
    proportionalBonus = document.getElementById("middleBonus").innerHTML = "Bono 14: " + proportionalBonus.toFixed(2);    
    christmasBonus = document.getElementById("chrisBonus").innerHTML = "Aguinaldo: " + christmasBonus.toFixed(2);
    // Cálculo de indemnización.
    totalSalary = document.getElementById("totalPay").innerHTML = "Total Pay: USD $" + totalSalary.toFixed(2);
}

function newCalc(){
    document.getElementById("baseSalary").value = "";
    document.getElementById("yearsWorked").value = "";
    document.getElementById('monthsWorked').value = "";
    document.getElementById('pendingSalary').value = "";
    document.getElementById('debts').value = "";
    document.getElementById('middleBonus').innerHTML = '';
    document.getElementById('chrisBonus').innerHTML = '';
    document.getElementById('totalPay').innerHTML = '';
}