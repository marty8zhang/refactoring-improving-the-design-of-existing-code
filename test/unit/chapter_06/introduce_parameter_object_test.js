'use strict'

import { describe, it } from 'mocha'
import { expect } from 'chai'
import {
  station,
  operatingPlan,
  readingsOutsideRange,
} from '../../../src/chapter_06/introduce_parameter_object.js'

describe('Chapter 06', function () {
  let actualReadings

  describe('Introduce Parameter Object', function () {
    it('readingsOutsideRange', function () {
      const expectedReadings = [
        { temp: 47, time: '2016-11-10 09:10' },
        { temp: 58, time: '2016-11-10 09:30' },
      ]

      actualReadings = readingsOutsideRange(
        station,
        operatingPlan.temperatureRange,
      )

      expect(actualReadings).to.eql(expectedReadings)
    })
  })
})
