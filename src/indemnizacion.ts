#####
const calculateSalary = (): void => {
    const baseSalary: number = parseFloat((document.getElementById("baseSalary") as HTMLInputElement).value);
    const yearsWorked: number = parseFloat((document.getElementById("yearsWorked") as HTMLInputElement).value);
    const monthsWorked: number = parseFloat((document.getElementById("monthsWorked") as HTMLInputElement).value);
    const pendingSalary: number = parseFloat((document.getElementById("pendingSalary") as HTMLInputElement).value);
    const debts: number = parseFloat((document.getElementById("debts") as HTMLInputElement).value);
    
    // Bono 14 y Aginaldo
    let christmasBonus: number = (baseSalary / 12) * monthsWorked;
    let proportionalBonus: number = (baseSalary / 12) * monthsWorked;
    let totalSalary: number = ((baseSalary * yearsWorked) + proportionalBonus + christmasBonus + pendingSalary) - debts;

    proportionalBonus = (document.getElementById("middleBonus") as HTMLElement).innerHTML = "Bono 14: " + proportionalBonus.toFixed(2);    
    christmasBonus = (document.getElementById("chrisBonus") as HTMLElement).innerHTML = "Aguinaldo: " + christmasBonus.toFixed(2);
    
    // Cálculo de indemnización.
    totalSalary = (document.getElementById("totalPay") as HTMLElement).innerHTML = "Total Pay: USD $" + totalSalary.toFixed(2);
}

const newCalc = (): void => {
    (document.getElementById("baseSalary") as HTMLInputElement).value = "";
    (document.getElementById("yearsWorked") as HTMLInputElement).value = "";
    (document.getElementById("monthsWorked") as HTMLInputElement).value = "";
    (document.getElementById("pendingSalary") as HTMLInputElement).value = "";
    (document.getElementById("debts") as HTMLInputElement).value = "";
    (document.getElementById("middleBonus") as HTMLElement).innerHTML = "";
    (document.getElementById("chrisBonus") as HTMLElement).innerHTML = "";
    (document.getElementById("totalPay") as HTMLElement).innerHTML = "";
}