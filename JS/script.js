

    const val = document.getElementById("forma");
    val.addEventListener("submit", e => {
        e.preventDefault();
        const input1 = val.num12.value;
        var cardNumberInput = document.getElementById("num12");
        let alert = document.getElementById('woops');
        const patternForCardNumber = /^\d{16}$/;
        
        if (patternForCardNumber.test(input1)) {
            cardNumberInput.style.border = "1px solid green";
            alert.textContent = "";
        }else {
            cardNumberInput.style.border = "1px solid red";
            alert.textContent = "Woops! wrong format, numbers only.";
            alert.style.color = "red";
        }
    });


    

    function validation() {
        var cardNameInput = document.getElementById("wor1");
        var day = document.getElementById("daynumber");
        var year = document.getElementById("yearnumber");
        var cvc = document.getElementById("cvc");
        if (cardNameInput.value == "") {
            document.getElementById("woops2").innerHTML = "Woops! wrong format, input is empty"
            cardNameInput.style.border = "1px solid red";
            document.getElementById("woops2").style.color = "red";
        }else {
            cardNameInput.style.border = "1px solid green";
            document.getElementById("woops2").innerHTML = "";
        }

        if (day.value == "") {
            day.style.border = "1px solid red";
            document.getElementById("woops3").style.color = "red";
        }else {
            day.style.border = "1px solid green";
        }

        if (year.value == "") {
            year.style.border = "1px solid red";
            document.getElementById("woops4").style.color = "red";
        }else {
            year.style.border = "1px solid green";
        }

        if (cvc.value == "") {
            cvc.style.border = "1px solid red";
            document.getElementById("woops5").style.color = "red";
        }else {
            cvc.style.border = "1px solid green";
        }

        
    }