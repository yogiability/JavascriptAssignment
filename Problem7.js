/*
**PROBLEM 7**
Find the Nth term of the series: 1 , 4, 9, 16, 25,36, 49, 64, 81, .......*/

var num=parseInt(prompt("Enter any number"));
if(num==0){
    console.log("Square of 0 is always 0");
}
else if(num<0){
    console.log("*****Error please enter +ve value of num*****");
}
else{
    console.log(num*num);
}