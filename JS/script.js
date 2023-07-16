
    var creditCardInput = document.getElementById('num12');
    const val = document.getElementById("forma");
    val.addEventListener("submit", e => {
        e.preventDefault();
        const input1 = val.num12.value;
        let alert = document.getElementById('woops');
        const patternForCardNumber = /^\d{16}$/;
        
        if (patternForCardNumber.test(input1)) {
            creditCardInput.style.border = "1px solid green";
            alert.textContent = "";
        }else {
            creditCardInput.style.border = "1px solid red";
            alert.textContent = "Woops! wrong format, numbers only.";
            alert.style.color = "red";
        }

        var input2 = document.getElementById("wor1");
        var input3 = document.getElementById("daynumber");
        var input4 = document.getElementById("yearnumber");
        var inputCvc = document.getElementById("cvc");
        var alert2 = document.getElementById("woops2");
        var alert3 = document.getElementById("woops3");
        var alert4 = document.getElementById("woops4");
        var alert5 = document.getElementById("woops5");

        if (input2 == "" ) {
            input2.style.border = "1px solid green";
            alert2.textContent = "";
        }else {
            input2.style.border = "1px solid red";
            alert2.textContent = "Woops! wrong format, letters only.";
            alert2.style.color = "red";
        }
        if (input3 == "") {
            input3.style.border = "1px solid green";
            alert3.textContent = "";
        }else {
            input3.style.border = "1px solid red";
            alert3.textContent = "Woops! numbers only.";
            alert3.style.color = "red";
        }
        if (input4 == "") {
            input4.style.border = "1px solid green";
            alert4.textContent = "";
        }else {
            input4.style.border = "1px solid red";
            alert4.textContent = "Woops! numbers only.";
            alert4.style.color = "red";
        }
        if (inputCvc == "") {
            inputCvc.style.border = "1px solid green";
            alert5.textContent = "";
        }else {
            inputCvc.style.border = "1px solid red";
            alert5.textContent = "Woops! numbers only.";
            alert5.style.color = "red";
        }


        
    });

    function formatCreditCard() {
        var input = document.getElementById("num12");
        var value = input.value;
        
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

        input.value = value;
      }