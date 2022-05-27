/*   PROBLEM 13
Ajay is given a series(In example).he gone through the series but unable to understand
it properly,he has hired you.Your task is to understand the series and print the series
2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series.
*/

findnthnum();
function findnthnum(){
    var x=parseInt(prompt("enter the value of n"));
    var n=x*(x+1);
    console.log(n);
    }