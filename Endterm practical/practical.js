function result(){
  let n = document.getElementById("sub").value;
  let total = 0, pass = true;

  for(let i=1; i<=n; i++){
    let m = parseInt(prompt("Enter marks for Subject " + i));
    total += m;
    if(m < 35) pass = false;
  }

  let avg = total / n;
  let grade = "";

  if(avg >= 75) grade = "A";
  else if(avg >= 60) grade = "B";
  else if(avg >= 50) grade = "C";
  else if(avg >= 35) grade = "D";
  else grade = "F";

  let res = pass ? "PASS" : "FAIL";

  document.getElementById("out").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average Marks: " + avg.toFixed(2) + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + res;
}