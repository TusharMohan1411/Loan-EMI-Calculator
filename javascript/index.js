console.log("JS Connected");

var productCost = document.getElementById("productCost");
var downPayment = document.getElementById("downPayment");
var emiAmount = document.getElementById("emiAmount");
var totalEMIs = document.getElementById("totalEMIs");
var calculate = document.getElementById("calculate");
var startMonth = document.getElementById("startMonth");
var startYear = document.getElementById("startYear");

var EMIamount = document.querySelector("#EMIamount");
var finalPrice = document.querySelector("#finalPrice");
var extraMoney = document.querySelector("#extraMoney");
var interest = document.querySelector("#interest");
var tenure = document.querySelector("#tenure");
var endMonth = document.querySelector("#endMonth");
var endYear = document.querySelector("#endYear");

function emiCalc() {

    var productCostf = parseInt(productCost.value);
    var downPaymentf = parseInt(downPayment.value);
    var emiAmountf = parseInt(emiAmount.value);
    var totalEMIsf = parseInt(totalEMIs.value);
    var startMonthf = startMonth.value;
    var startYearf = parseInt(startYear.value);

    if (!productCostf || isNaN(productCostf) || productCostf === "") {
        alert("Product Cost is Empty or Wrong!");
        return false;
    };

    if (!downPaymentf || isNaN(downPaymentf) || downPaymentf === "") {
        alert("Down Payment is Empty or Wrong!");
        return false;
    };

    if (!emiAmountf || isNaN(emiAmountf) || emiAmount === "") {
        alert("EMI Per Month Amount is Empty or Wrong!");
        return false;
    };

    if (!totalEMIsf || isNaN(totalEMIsf) || totalEMIsf === "") {
        alert("Total Nos of EMIs is Empty or Wrong.");
        return false;
    };

    if (productCostf < downPaymentf) {
        alert("Actual Price of the Product cannot be less than Down Payment!")
        return false;
    }

    if (productCostf === downPaymentf) {
        alert("You have already paid all amount in Down Payment. No EMI is required!")
        return false;
    }

    if ((productCostf - downPaymentf) < emiAmountf) {
        alert("Balance amount after Down Payment cannot be less than the Per Month EMI!")
        return false;
    }

    if (!startMonth.value) {
        alert("You have not selected the starting Month of EMI!")
        return false;
    }

    if (!startYearf || isNaN(startYearf) || startYearf === "" || startYearf < 1) {
        alert("EMI Start Year Value is Empty or Wrong!")
        return false;
    }

    var EMIamountFinal = emiAmountf * totalEMIsf;
    EMIamount.innerHTML = EMIamountFinal;

    var finalPriceFinal = EMIamountFinal + downPaymentf;
    finalPrice.innerHTML = finalPriceFinal;

    var extraMoneyPaid = finalPriceFinal - productCostf;
    extraMoney.innerHTML = extraMoneyPaid;

    var interestPaid = parseFloat((extraMoneyPaid / productCostf) * 100).toFixed(2) + "%";
    interest.innerHTML = interestPaid;

    var monthsTenure = totalEMIsf % 12;
    var yearTenure = Math.floor(totalEMIsf / 12);

    var EMItenure = yearTenure + " Years & " + monthsTenure + " Months";
    tenure.innerHTML = EMItenure;

    // Last Month EMI formula 

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const totalMonths = (monthNames.indexOf(startMonthf)) + totalEMIsf;
    var endMonthValue = "";

    if ((totalMonths) > 12) {
        endMonthValue = monthNames[(totalMonths % 12) - 1];
        endMonth.innerHTML = endMonthValue;
    } else {
        endMonthValue = monthNames[(totalMonths) - 1];
        endMonth.innerHTML = endMonthValue;
    }

    // Year Formula

    if (((monthNames.indexOf(startMonthf) + 1) + monthsTenure) > 12) {
        endYear.innerHTML = startYearf + yearTenure + 1;
    } else {
        endYear.innerHTML = startYearf + yearTenure;
    }

    // productCost.value = "";
    // downPayment.value = "";
    // emiAmount.value = "";
    // totalEMIs.value = "";
    // startMonth.value = "";
    // startYear.value = "";

    console.log("Actual Cost of Product : - Rs" + productCostf);
    console.log("Down Payment : - Rs" + downPaymentf);
    console.log("EMI Amount Per Month : - Rs" + emiAmountf);
    console.log("Total No of EMIs : - " + totalEMIsf);
    console.log(startMonthf);
}

calculate.addEventListener("click", () => {
    emiCalc();
})

// function displayTime() {

//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();

//     // Add leading zeros if necessary
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     // Display the time in the format "HH:MM:SS"
//     var timeString = hours + ":" + minutes + ":" + seconds;
//     document.getElementById("time").innerHTML = timeString;




//   }