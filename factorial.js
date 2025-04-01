/**
 *
 * @param {number} number - A positive integer to compute the factorial of
 * @returns {number} The factorial of the given number
 */
export default function factorial(number) {
    if(typeof number !== "number") {
        throw new TypeError("function expects only numbers");
    }

    if(number < 0) {
        throw new RangeError("function expects only positive numbers")
    }

     if (!Number.isInteger(number)) {
       throw new RangeError("function expects only integers");
     }


  let result = 1;

  for (number; number > 0; number--) {
    result = result * number;
  }

  return result;
}

console.log(factorial(4));

