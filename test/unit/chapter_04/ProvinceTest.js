"use strict";

import {describe} from "mocha";
import {strict as assert} from "assert";
import {Province} from "../../../chapter_04/Province";
import {sampleProvinceData} from "../../../chapter_04/sampleProvinceData";

describe("Province", function() {
    it("shortfall", function() {
        const asia = new Province(sampleProvinceData());
        assert.strictEqual(asia.shortfall, 5);
    });
});
