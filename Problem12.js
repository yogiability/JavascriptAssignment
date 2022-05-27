/* PROBLEM 12
 Simi is learning about palindromic numbers. Her teacher gave him the task to count
 all palindromic numbers present in that range.Simi has told you about this and want
 your help. You design an algorithm in order to help simi.
*/

isPalindrome();
function isPalindrome(n)
{
var rev=0;
for(var i=n;Math.trunc(i)>0;i/=10)
{
    rev=((rev*10)+(Math.trunc(i)%10))
}
//if n and rev are same,then n is palindrome
return(n==rev);
}
//prints palindrome b/w min and max
function countPal(min,max)
{
    for(var i=min;i<=max;i++)
    {
        if(isPalindrome(i))
        console.log(i+" ");
    }
}
let n=parseInt(prompt("enter a positive number"));
countPal(0,n);

