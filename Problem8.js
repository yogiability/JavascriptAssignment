/*Program 8 
Remove all whitespace from the string and print length of the string
*/

var str=prompt("enter any string");
if(str==0){
    console.log("0");
}
else if(str<0){
    console.log("Error");
}
else{
newstring=str.replace(/\s/g,'');
console.log(newstring);
console.log("Length of entered string = "+str.length);//original string length.
console.log("Length of string after removing all whitespaces = " +newstring.length);//the length of string after removing all whitespaces.
}