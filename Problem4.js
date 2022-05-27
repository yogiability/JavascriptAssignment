/*
   **PROBLEM 4**
Print the number of days in the month corresponding to that number.
     
 *****solution*****
*/

  var month=parseInt(prompt("Enter month number"));
   switch(month)
   {
       case 1: case 3: case 5: case 7: case 8: case 10: case 12:
           console.log('This month has',30,'days');
           break;
        case 2:
            console.log('This month has',28,'days');
            break;
        case 4: case 6: case 9: case 11:
            console.log('This month has',30,'days');
            break;
        default:
            console.log("Error");
            break;
   }