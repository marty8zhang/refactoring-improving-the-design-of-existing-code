'use strict'

import { describe, it } from 'mocha'
import { expect } from 'chai'
import { rating } from '../../../../src/chapter_10/replace_conditional_with_polymorphism/voyageRating'

describe('Chapter 10', function () {
  describe('Replace Conditional with Polymorphism', function () {
    describe('Voyage Rating Tests', function () {
      it('Should return the rating for voyage', function () {
        const voyage = { zone: 'west-indies', length: 10 }
        const history = [
          { zone: 'east-indies', profit: 5 },
          { zone: 'west-indies', profit: 15 },
          { zone: 'china', profit: -2 },
          { zone: 'west-africa', profit: 7 },
        ]

        const actualRating = rating(voyage, history)

        expect(actualRating).to.eql('B')
      })
    })
  })
})
