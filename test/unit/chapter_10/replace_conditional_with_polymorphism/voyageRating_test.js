'use strict'

import { describe, it } from 'mocha'
import { expect } from 'chai'
import { rating } from '../../../../src/chapter_10/replace_conditional_with_polymorphism/voyageRating'

describe('Chapter 10', function () {
  describe('Replace Conditional with Polymorphism', function () {
    describe('Voyage Rating Tests', function () {
      it('Should return the rating for voyage', function () {
        const voyageChina = { zone: 'china', length: 10 }
        const voyageEastIndies = { zone: 'east-indies', length: 4 }
        const voyageEastIndies2 = { zone: 'east-indies', length: 5 }
        const voyageWestIndies = { zone: 'west-indies', length: 10 }
        const history = [
          { zone: 'east-indies', profit: 5 },
          { zone: 'west-indies', profit: 15 },
          { zone: 'china', profit: -2 },
          { zone: 'west-africa', profit: 7 },
        ]
        const history2 = [
          { zone: 'east-indies', profit: 5 },
          { zone: 'west-indies', profit: 15 },
          { zone: 'china', profit: 12 },
          { zone: 'west-africa', profit: 7 },
          { zone: 'china', profit: 14 },
        ]

        const actualVoyageChinaRating = rating(voyageChina, history)
        expect(actualVoyageChinaRating).to.eql('A')

        const actualVoyageEastIndiesRating = rating(voyageEastIndies, history2)
        expect(actualVoyageEastIndiesRating).to.eql('A')

        const actualVoyageEastIndiesRating2 = rating(voyageEastIndies2, history2)
        expect(actualVoyageEastIndiesRating2).to.eql('B')

        const actualVoyageWestIndiesRating = rating(voyageWestIndies, history)
        expect(actualVoyageWestIndiesRating).to.eql('B')
      })
    })
  })
})
