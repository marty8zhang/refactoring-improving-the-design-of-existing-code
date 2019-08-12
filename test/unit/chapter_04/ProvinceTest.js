"use strict";

import {describe} from "mocha";
import {Province} from "../../../chapter_04/Province";
import {sampleProvinceData} from "../../../chapter_04/sampleProvinceData";
import {
    assert,
    expect,
} from "chai";

describe("Chapter 04 - Province", function () {
    let asia;

    beforeEach(function () {
        asia = new Province(sampleProvinceData());
    });

    it("shortfall", function () {
        assert.strictEqual(asia.shortfall, 5);

        expect(asia.shortfall).to.equal(5);
    });

    it('profit', function () {
        expect(asia.profit).to.equal(230);
    });

    it('change production', function () {
        asia.producers[0].production = 20;

        expect(asia.shortfall).to.equal(-6);
        expect(asia.profit).to.equal(292);
    });

    it('zero demand', function () {
        asia.demand = 0;

        expect(asia.shortfall).to.equal(-25);
        expect(asia.profit).to.equal(0);
    });

    it('negative demand', function () {
        asia.demand = -1;
        expect(asia.shortfall).to.equal(-26);
        expect(asia.profit).to.equal(-10);
    });

    it('empty string demand', function () {
        asia.demand = "";
        expect(asia.shortfall).to.NaN;
        expect(asia.profit).to.NaN;
    });
});

describe('Province without producers', function () {
    let noProducers;

    beforeEach(function () {
        const data = {
            name: "Province without producers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
    });

    it('shortfall', function () {
        expect(noProducers.shortfall).to.equal(30);
    });

    it('profit', function () {
        expect(noProducers.profit).to.equal(0);
    });
});

// This kind of errors among modules of a system usually doesn't need to be covered. However, if the data are coming in
// from external sources, the failure of this kind of tests indicates the need of data validation logic in the code.
// describe('String for producers', function () {
//     it('Setup failed', function () {
//             const data = {
//                 name: "String producers",
//                 producers: "",
//                 demand: 30,
//                 price: 20
//             };
//             const prov = new Province(data);
//
//             expect(prov.shortfall).equal(0);
//         }
//     );
// });
