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
    });
});