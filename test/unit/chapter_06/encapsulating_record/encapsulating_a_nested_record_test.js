"use strict";

import {describe} from "mocha";
import {expect} from "chai";
import {
    getRawCustomersData,
    getCustomersDataObject,
    compareUsageWithTheYearBefore,
} from "../../../../chapter_06/encapsulate_record/encapsulating_a_nested_record.js";

describe("Chapter 06", function () {
    describe("Encapsulate Record", function () {
        describe('Encapsulating a Nested Record', function () {
            const customerId = '1920';
            const year = '2016';
            const month = '2';
            const amount = 206;

            it('Should properly set usage', function () {
                getCustomersDataObject().setUsage(customerId, year, month, amount);

                expect(amount).to.eql(getRawCustomersData()[customerId].usages[year][month]);
            });

            it('Should properly compare usage', function () {
                const expectedComparisonResult = {laterAmount: 206, change: 143};

                expect(expectedComparisonResult).to.eql(compareUsageWithTheYearBefore(customerId, year, month));
            });
        });
    });
});
