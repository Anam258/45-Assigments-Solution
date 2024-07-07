let age : number = 24;
if (age < 1){
    console.log("The Person is a new born");
}
else if (age > 1 && age < 5){
    console.log("The Person is a Baby");
}
else if (age > 5 && age < 10){
    console.log("The Person is a Kid");
}
else if (age > 10 && age < 18){
    console.log("The Person is teenager");
}
else if (age > 18 && age < 35){
console.log("The Person is Young");
}
else if (age > 35 && age < 50){
    console.log("The Person is Adult");
}
else if (age > 50 && age < 65){
    console.log("The Person is in Middle Age");   
}
else {
    console.log("The Person is  Senior Adult");
}