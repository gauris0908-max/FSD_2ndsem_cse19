function generateTable() {
    let num = document.getElementById("numberInput").value;
    let output = "";

    if (num === "") {
        output = "Please enter a number!";
    } else {
        for (let i = 1; i <= 10; i++) {
            output += num + " × " + i + " = " + (num * i) + "<br>";
        }
    }

    document.getElementById("result").innerHTML = output;
}