

    const val = document.getElementById("forma");
    val.addEventListener("submit", e => {
        e.preventDefault();
        const input1 = val.num12.value;
        console.log(iput1);
    });
    




// function con() {

//     var inp1 = document.getElementById("num12").value;
//     var inp2 = document.getElementById("wor1").value;

//     if (inp1 == "" || inp1.lenght == 0) {
//         document.getElementById("woops").innerHTML = "Woops! input is empty";
//         document.getElementById("woops").style.color = "red";
//         document.getElementById("num12").style.border = "1px solid red";
//     }else if (inp2 == "") {
//         document.getElementById("woops2").innerHTML = "Woops! input is empty.";
//         document.getElementById("woops2").style.color = "red";
//         document.getElementById("wor1").style.border = "1px solid red";
//     }

// }