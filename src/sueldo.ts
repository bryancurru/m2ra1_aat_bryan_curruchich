function calculateSalary() {
    /*Get Values DOM*/
    var salary = parseFloat(document.getElementById("freeSalary").value);
    var bonuses = parseFloat(document.getElementById("totalBonuses").value);
    var commissions = parseFloat(document.getElementById("totalCommissions").value);
    var loans = parseFloat(document.getElementById("totalLoans").value);
    var savings = parseFloat(document.getElementById("totalSavings").value);
    var socialSecurity = (parseFloat(document.getElementById("freeSalary").value) * 0.0483);
    /*Calculate Total income*/
    var totalIncome = salary + bonuses + commissions;
    var totalExpenses = socialSecurity + loans + savings;
    totalIncome = document.getElementById("totalEarned").innerHTML = totalIncome;
    /*Calculating Total Expenses*/
    socialSecurity = document.getElementById("totalIGSS").innerHTML = socialSecurity.toFixed(2);
    totalExpenses = document.getElementById("totalSpents").innerHTML = totalExpenses;
    /*Calculating Total*/
    var netIncome = totalIncome - totalExpenses;
    netIncome = document.getElementById("totalTotal").innerHTML = netIncome.toFixed(2);
}
function newPay(){
    document.getElementById("freeSalary").value = "";
    document.getElementById("totalBonuses").value = "";
    document.getElementById('totalCommissions').value = "";
    document.getElementById('totalLoans').value = "";
    document.getElementById('totalSavings').value = "";
    document.getElementById('totalEarned').innerHTML = '';
    document.getElementById('totalIGSS').innerHTML = '';
    document.getElementById('totalSpents').innerHTML = '';
    document.getElementById('totalTotal').innerHTML = '';
}