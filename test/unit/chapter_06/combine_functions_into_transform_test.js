"use strict";

import {describe} from "mocha";
import {expect} from "chai";
import {_} from "lodash";
import {enrichReading} from "../../../chapter_06/combine_functions_into_transform.js";

describe("Chapter 06", function () {
    describe("Combine Functions into Transform", function () {
        it('Should be (not) deeply equal.', function () {
            const baseReading = {customer: "ivan", quantity: 15, month: 5, year: 2017};
            const testOne = _.cloneDeep(baseReading);

            const testTwo = enrichReading(baseReading);
            expect(baseReading).to.not.eql(testTwo);
            const expectedTestTwoResult = {customer: "ivan", quantity: 15, month: 5, year: 2017, baseCharge: 30330};
            expect(expectedTestTwoResult).to.eql(testTwo);

            expect(baseReading).to.eql(testOne); // `enrichReading()` should have made no change to the original object.
        });
    });
});
