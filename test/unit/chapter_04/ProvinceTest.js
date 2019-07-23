"use strict";

import {describe} from "mocha";
// import {strict as assert} from "assert";
import {Province} from "../../../chapter_04/Province";
import {sampleProvinceData} from "../../../chapter_04/sampleProvinceData";

const {assert, expect} = require('chai');

describe("Province", function() {
    let asia;

    beforeEach(function () {
        asia = new Province(sampleProvinceData());
    });

    it("shortfall", function() {
        assert.strictEqual(asia.shortfall, 5);

        expect(asia.shortfall).to.equal(5);
    });

    it('profit', function() {
        expect(asia.profit).to.equal(230);
    });

    it('change production', function() {
        asia.producers[0].production = 20;

        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });
});
