/* PROBLEM 10
Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements
 in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed
 are the odd and sorted are the even’. Loki manages to decode the clue which translates
 to “sort the even positioned elements of an array, starting from the element at index 0,
in ascending order”. Manipulate the array so as to help Loki steal the tesseract.
*/

var l=parseInt(prompt("enter the length of an array"));
var arr=[];
var ele;
var res=[];
var final=[];
for(let i=0;i<l;i++)
{
    ele=parseInt(prompt("enter array element"));
    arr.push(ele);
    //console.log(ele);
}
res=arr.filter((x,i)=> i%2==0).sort((a,b)=>a-b);
for(let k=0;k<arr.length;k++)
{
    if(k%2==0)
    {
        final.push(res.shift());
    }
    else
    {
        final.push(arr[k]);
    }
}
console.log(final);