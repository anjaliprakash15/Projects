//Temp(Fahrenheit) = [Temp(Degrees)*9/5] + 32
function temperature(){
    var c = document.getElementById("celsius").value;
    var f = (c*9/5)+32
    document.getElementById("fahrenheit").value = f
}
//Weight(Pounds) = Weight(Kgs)*2.2
function weight(){
    var kg = document.getElementById("kilo").value;
    var p = kg*2.2
    document.getElementById("pounds").value = p
}
//Distance(Miles) = Distance(Kms)*0.62137
function distance(){
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}