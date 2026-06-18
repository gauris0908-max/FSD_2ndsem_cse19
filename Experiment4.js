function calculateResult() {

    let subjects = parseInt(document.getElementById("subjects").value);

    if (isNaN(subjects) || subjects <= 0) {
        alert("Please enter a valid number of subjects!");
        return;
    }

    let total = 0;

    for (let i = 1; i <= subjects; i++) {

        let marks = parseFloat(
            prompt("Enter marks for Subject " + i)
        );

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Please enter valid marks between 0 and 100.");
            return;
        }

        total += marks;
    }

    let average = total / subjects;

    let grade = "";
    let result = "";

    if (average >= 80) {
        grade = "A";
    }
    else if (average >= 60) {
        grade = "B";
    }
    else if (average >= 40) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    if (average >= 40) {
        result = "PASS";
    }
    else {
        result = "FAIL";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}