var T_Marks = +prompt("Enter the total numbers");
var M_Marks = +prompt("Enter the Maximum Marks")
var percentage = (T_Marks/M_Marks * 100).toFixed(2)
document.write("Your percentage is " + percentage + "% <br>")

if (percentage >= 90){
    document.write("Your Grade is A+")
}
else if (percentage >= 80){
    document.write("Your Grade is A")
}
else if (percentage >= 70) {
    document.write("Your Grade is B")
}
else if (percentage >= 60) {
    document.write("Your Grade is C")
}
else if (percentage >= 50) {
    document.write("Your Grade is D")
}
else {
    document.write("Sorry, You are Failed")
}