/*
    **PROBLEM 1** 
You are provided with a number, "**N**". Find its factorial.
      
*****solution*******/

var n,fact=1;
num=parseInt(prompt("enter any num"));
var n=num;
if(num==0)
{
    console.log("Factorial of 0 is 1");
}
else if(num>0)
{
        for(num=num;num>=1;num--)
        {
            fact=fact*num;
        }
        console.log("Factorial of " +n +" is "+fact);
}  
else
{
    console.log("Plz enter a positive number to find the factorial");
}