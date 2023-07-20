function clicked() {
    var form = document.getElementById("forma");
    var creditCardInput = document.getElementById("num12");
    var nameInput = document.getElementById("wor1");
    var dayNumber = document.getElementById("dayNumber");
    var yearNumber = document.getElementById("yearinp");
    var cvcInput = document.getElementById("cvc");
    

    if (creditCardInput.value == "") {
        document.getElementById("woops").style.color = "red";
        document.getElementById("woops").innerHTML = "Woops! wrong format, input is empty.";
        creditCardInput.style.border = "1px solid red";
    }else {
        creditCardInput.style.border = "1px solid green";
        document.getElementById("woops").innerHTML = "";
    }
    if (nameInput.value == "") {
        document.getElementById("woops2").style.color = "red";
        document.getElementById("woops2").innerHTML = "Woops! wrong format, input is empty.";
        nameInput.style.border = "1px solid red";
    }else {
        nameInput.style.border = "1px solid green";
        document.getElementById("woops2").innerHTML = "";
    }
    if (dayNumber.value == "") {
        document.getElementById("woops3").style.color = "red";
        document.getElementById("woops3").innerHTML = "Woops! wrong format, input is empty.";
        dayNumber.style.border = "1px solid red";
    }else {
        dayNumber.style.border = "1px solid green";
        document.getElementById("woops3").innerHTML = "";
    }
    if (yearNumber.value == "") {
        document.getElementById("woops4").style.color = "red";
        document.getElementById("woops4").innerHTML = "Woops! wrong format, input is empty.";
        yearNumber.style.border = "1px solid red";
    }else {
        yearNumber.style.border = "1px solid green";
        document.getElementById("woops4").innerHTML = "";
    }

    if (cvcInput.value == "") {
        document.getElementById("woops5").style.color = "red";
        document.getElementById("woops5").innerHTML = "Woops! wrong format, input is empty.";
        cvcInput.style.border = "1px solid red";
    }else {
        cvcInput.style.border = "1px solid green";
        document.getElementById("woops5").innerHTML = "";
    }

}