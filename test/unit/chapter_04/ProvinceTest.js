"use strict";

import {describe} from "mocha";
// import {strict as assert} from "assert";
import {Province} from "../../../chapter_04/Province";
import {sampleProvinceData} from "../../../chapter_04/sampleProvinceData";

const assert = require('chai').assert;
const expect = require('chai').expect;

describe("Province", function() {
    it("shortfall", function() {
        const asia = new Province(sampleProvinceData());

        assert.strictEqual(asia.shortfall, 5);

        expect(asia.shortfall).to.equal(5);
    });
});
