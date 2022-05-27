/*  PROBLEM 15

You are given a postfix expression. Evaluate the given expression and print the result.
*/

function evaluatePostfix(expression) {
    let stack = [];
    let len = expression.length
    for (let i = 0; i < len; i++) {
        let c = expression[i];
      
        if (!isNaN(parseInt(c))) {
            stack.push(Number(c))
        }
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case "+":
                    stack.push(val2 + val1);
                    break;
                case "-":
                    stack.push(val2 - val1)
                    break;
                case "*":
                    stack.push(val2 * val1);
                    break;
                case "/":
                    stack.push(val2 / val1)
                    break;
            }
        }
    }
    return stack.pop()
}

let expression = "531*+9-"
let result = evaluatePostfix(expression);
console.log(result);