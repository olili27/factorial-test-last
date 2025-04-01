import {assert} from "chai";
import factorial from "../factorial.js";

describe("Factorial Function for Positive Integers", function () {
    describe("Zero and Positive Integers", function () {
        it("factorial(0) should return 1", function () {
            assert.strictEqual(factorial(0), 1);
        });

        it("factorial(1) should return 1", function () {
          assert.strictEqual(factorial(1), 1);
        });

         it("factorial(4) should return 24", function () {
           assert.strictEqual(factorial(4), 24);
         });

          it("factorial(13) should return 6227020800", function () {
            assert.strictEqual(factorial(13), 6227020800);
          });
    });

    describe("Negative Integers", function() {
        it("factorial(-1) should throw an error `function expects only positive numbers`", function () {
          assert.throws(function () {
            factorial(-1);
          }),
            RangeError,
            "function expects only positive numbers";
        });

        it("factorial(-21) should throw an error `function expects only positive numbers`", function () {
          assert.throws(function () {
            factorial(-21);
          }),
            RangeError,
            "function expects only positive numbers";
        });
    })

    describe("Floats", function () {
      it("factorial(1.1) should throw an error `function expects only positive integers`", function () {
        assert.throws(function () {
          factorial(1.1);
        }),
          TypeError,
          "function expects only positive integers";
      });
    });

    describe("Non-Numeric", function () {
      it("factorial('tim') should throw an error `function expects only numbers`", function () {
        assert.throws(function () {
          factorial("tim");
        }),
          Error,
          "function expects only numbers";
      });

      it("factorial('') should throw an error `function expects only numbers`", function () {
        assert.throws(function () {
          factorial("");
        }),
          Error,
          "function expects only numbers";
      });

    });
});