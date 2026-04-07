function calculateResult() {
    const num = document.getElementById('numSubjects').value;
    const display = document.getElementById('displayArea');
    
    if (num === "" || num <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let totalMarks = 0;
    let marksArray = [];

    // Loop to ask for marks for each subject
    for (let i = 1; i <= num; i++) {
        let marks = prompt(`Enter marks for Subject ${i}`);
        
        // Convert input to a number
        let numericMarks = parseFloat(marks);

        if (!isNaN(numericMarks)) {
            totalMarks += numericMarks;
            marksArray.push(numericMarks);
        } else {
            alert("Invalid input. Skipping this subject.");
        }
    }

    // Calculate percentage (assuming each subject is out of 100)
    let percentage = (totalMarks / (num * 100)) * 100;

    // Display the results on the page
    display.innerHTML = `
        <hr>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Status:</strong> ${percentage >= 40 ? "Pass" : "Fail"}</p>
    `;
}