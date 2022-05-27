/*
**PROBLEM 6**
Write a code to get an integer N and print the sum of values from 1 to N.
*/

var n,i,sum=0; 
n=parseInt(prompt("enter the value of n"));
for(i=1;i<=n;i++)
{
    num=parseInt(prompt("enter number"));
    sum=sum+num;
}
console.log("Sum of all "+n+ " numbers is " +sum);
