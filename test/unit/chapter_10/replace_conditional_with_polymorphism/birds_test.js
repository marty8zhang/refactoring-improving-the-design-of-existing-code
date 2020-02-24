'use strict'

import * as util from 'util'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import {
  plumages,
  speeds,
} from '../../../../src/chapter_10/replace_conditional_with_polymorphism/birds.js'

const testBirdsData = [
  {
    name: 'Test AfricanSwallow 1',
    type: 'AfricanSwallow',
    numberOfCoconuts: 2,
    voltage: 0,
    isNailed: false,
  },
  {
    name: 'Test AfricanSwallow 2',
    type: 'AfricanSwallow',
    numberOfCoconuts: 3,
    voltage: 0,
    isNailed: false,
  },
  {
    name: 'Test EuropeanSwallow 1',
    type: 'EuropeanSwallow',
    numberOfCoconuts: 0,
    voltage: 0,
    isNailed: false,
  },
  {
    name: 'Test NorwegianBlueParrot 1',
    type: 'NorwegianBlueParrot',
    numberOfCoconuts: 0,
    voltage: 100,
    isNailed: false,
  },
  {
    name: 'Test NorwegianBlueParrot 2',
    type: 'NorwegianBlueParrot',
    numberOfCoconuts: 0,
    voltage: 101,
    isNailed: true,
  },
]

describe('Chapter 10', function () {
  describe('Replace Conditional with Polymorphism', function () {
    describe('Birds Tests', function () {
      it('Should return plumages for birds', function () {
        const expectedPlumages = new Map([
          ['Test AfricanSwallow 1', 'average'],
          ['Test AfricanSwallow 2', 'tired'],
          ['Test EuropeanSwallow 1', 'average'],
          ['Test NorwegianBlueParrot 1', 'beautiful'],
          ['Test NorwegianBlueParrot 2', 'scorched'],
        ])
        const actualPlumages = plumages(testBirdsData)

        expect(
          actualPlumages,
                    `Failed to assert that the expected plumages:
${util.format('%s', expectedPlumages)}
deeply equals the actual plumages:
${util.format('%s', actualPlumages)}`,
        ).to.eql(expectedPlumages)
      })

      it('Should return speeds for birds', function () {
        const expectedSpeeds = new Map([
          ['Test AfricanSwallow 1', 36],
          ['Test AfricanSwallow 2', 34],
          ['Test EuropeanSwallow 1', 35],
          ['Test NorwegianBlueParrot 1', 20],
          ['Test NorwegianBlueParrot 2', 0],
        ])
        const actualSpeeds = speeds(testBirdsData)

        expect(
          actualSpeeds,
                    `Failed to assert that the expected speeds:
${util.format('%s', expectedSpeeds)}
deeply equals the actual speeds:
${util.format('%s', actualSpeeds)}`,
        ).to.eql(expectedSpeeds)
      })
    })
  })
})
