"use strict";

import {_} from "lodash";

export {enrichReading};

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);

    return result;
}

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function baseRate(month, year) {
    let nonsenseResult = month + year;

    return nonsenseResult;
}