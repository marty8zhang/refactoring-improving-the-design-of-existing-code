'use strict'

export {
  plumages,
  speeds,
}

function plumages (birds) {
  return new Map(
    birds
      .map(b => createBird(b))
      .map(b => [b.name, b.plumage]),
  )
}

function speeds (birds) {
  return new Map(
    birds
      .map(b => createBird(b))
      .map(b => [b.name, b.airSpeedVelocity]),
  )
}

function createBird (birdData) {
  switch (birdData.type) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow(birdData)
    case 'AfricanSwallow':
      return new AfricanSwallow(birdData)
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(birdData)
    default:
      return new Bird(birdData)
  }
}

class Bird {
  constructor (birdData) {
    Object.assign(this, birdData)
  }

  get plumage () {
    return 'unknown'
  }

  get airSpeedVelocity () {
    return null
  }
}

class EuropeanSwallow extends Bird {
  get plumage () {
    return 'average'
  }

  get airSpeedVelocity () {
    return 35
  }
}

class AfricanSwallow extends Bird {
  get plumage () {
    return (this.numberOfCoconuts > 2) ? 'tired' : 'average'
  }

  get airSpeedVelocity () {
    return 40 - 2 * this.numberOfCoconuts
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage () {
    return (this.voltage > 100) ? 'scorched' : 'beautiful'
  }

  get airSpeedVelocity () {
    return (this.isNailed) ? 0 : 10 + this.voltage / 10
  }
}
