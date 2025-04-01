/**
 *
 * @param {number} number - A positive integer to compute the factorial of
 * @returns {number} The factorial of the given number
 */
export default function factorial(number) {
  let result = 1;

  for (let count = number; count > 0; count--) {
    result = result * number;
  }

  return result;
}
