"use strict";

import {describe} from "mocha";
import {
    station,
    operatingPlan,
    readingsOutsideRange,
    NumberRange,
} from "../../../chapter_06/introduce_parameter_object.js";
import {
    assert,
    expect,
} from "chai";

describe("Chapter 06", function () {
    let actualReadings;

    describe("Introduce Parameter Object", function () {
        it("readingsOutsideRange", function () {
            const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
            const expectedReadings = [
                {temp: 47, time: '2016-11-10 09:10'},
                {temp: 58, time: '2016-11-10 09:30'},
            ];

            actualReadings = readingsOutsideRange(
                station,
                range
            );

            expect(actualReadings).to.eql(expectedReadings);
        });
    });
});
