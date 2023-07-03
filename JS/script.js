

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

    val.addEventListener("submit", e => {
        e.preventDefault();
        const input2 = val.wor1.value;
        var userNameInput = document.getElementById("wor1");
        let alert2 = document.getElementById('woops2');
        const patternForusername = /^[a-zA-Z]+$/;
        
        if (patternForusername.test(input2)) {
            userNameInput.style.border = "1px solid green";
            alert2.textContent = "";
        }else {
            userNameInput.style.border = "1px solid red";
            alert2.textContent = "Woops! wrong format, letters only.";
            alert2.style.color = "red";
        }
    });


    val.addEventListener("submit", e => {
        e.preventDefault();
        const input3 = val.daynumber.value;
        const input4 = val.yearnumber.value;
        const input5 = val.checkVisibility.value;
        var dayNumberInput = document.getElementById("daynumber");
        var yearNumberInput = document.getElementById("yearnumber");
        var cvcNumberInput = document.getElementById("cvc");
        let alert3 = document.getElementById('woops3');
        let alert4 = document.getElementById("woops4");
        let alert5 = document.getElementById("woops5");
        const patternFordaynumber = /^\d{2}$/;
        const patternForcvcNumber = /^\d{3}$/;
        
        if (patternFordaynumber.test(input3)) {
            dayNumberInput.style.border = "1px solid green";
            alert3.textContent = "";
        }else {
            dayNumberInput.style.border = "1px solid red";
            alert3.textContent = "Woops! numbers only.";
            alert3.style.color = "red";
        }
        if (patternFordaynumber.test(input4)) {
            yearNumberInput.style.border = "1px solid green";
            alert4.textContent = "";
        }else {
            yearNumberInput.style.border = "1px solid red";
            alert4.textContent = "Woops! numbers only.";
            alert4.style.color = "red";
        }
        if (patternForcvcNumber.test(input5)) {
            cvcNumberInput.style.border = "1px solid green";
            alert5.textContent = "";
        }else {
            cvcNumberInput.style.border = "1px solid red";
            alert5.textContent = "Woops! numbers only.";
            alert5.style.color = "red";
        }
    });
