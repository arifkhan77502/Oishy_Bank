// Login Button Event Handler-----------------------------------------------
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})




// Deposit Button Event Handler----------------------------------------------
const depositButton = document.getElementById("addDeposit");
depositButton.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);

    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;   
})

function updateSpanText (id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total; 
}




// Withdraw Button Event Handler------------------------------------
const withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw", withdrawNumber);

    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";

    // const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // totalWithdraw = withdrawNumber + currentWithdrawNumber;
    // document.getElementById("currentWithdraw").innerText = totalWithdraw;
    // document.getElementById("withdrawAmount").value = "";

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber - withdrawNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}