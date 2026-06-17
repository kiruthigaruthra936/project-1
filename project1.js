function calculateBMI(){

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    height = height / 100;   // cm to meter

    let bmi = weight / (height * height);

    let category;

    if(bmi < 18.5){
        category = "Underweight";
        color = "red";
    }
    else if(bmi < 25){
        category = "Normal";
        color = "green";
    }
    else{
        category = "Overweight";
        color = "blue";
    }

    document.getElementById("result").innerHTML =
    "BMI: " + bmi.toFixed(2) + "<br>Category: " + category;
}