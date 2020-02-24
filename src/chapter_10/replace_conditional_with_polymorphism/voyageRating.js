'use strict'

export {
  rating,
}

function rating (voyage, history) {
  return createRating(voyage, history).value
}

function createRating (voyage, history) {
  switch (voyage.zone) {
    case 'east-indies':
      return new VoyageEastIndiesRating(voyage, history)

    case 'china':
      return new VoyageChinaRating(voyage, history)

    default:
      return new Rating(voyage, history)
  }
}

class Rating {
  constructor (voyage, history) {
    this._voyage = voyage
    this._history = history
  }

  get value () {
    const vpf = this._voyageProfitFactor
    const vr = this._voyageRisk
    const chr = this._captainHistoryRisk

    if (vpf * 3 > (vr + chr * 2)) return 'A'
    else return 'B'
  }

  get _voyageProfitFactor () {
    let result = 2

    result += this._voyageLengthFactor

    result += this._historyLengthFactor

    return result
  }

  get _voyageLengthFactor () {
    let result = 0

    if (this._voyage.length > 14) result -= 1

    return result
  }

  get _historyLengthFactor () {
    let result = 0

    if (this._history.length > 8) result += 1

    return result
  }

  get _hasChinaHistory () {
    return this._history.some(v => v.zone === 'china')
  }

  get _voyageRisk () {
    let result = 1

    if (this._voyage.length > 4) result += 2
    if (this._voyage.length > 8) result += this._voyage.length - 8

    return Math.max(result, 0)
  }

  get _captainHistoryRisk () {
    let result = 1

    if (this._history.length < 5) result += 4

    result += this._history.filter(v => v.profit < 0).length

    return Math.max(result, 0)
  }
}

class VoyageChinaRating extends Rating {
  get _voyageProfitFactor () {
    return super._voyageProfitFactor + 1
  }

  get _voyageLengthFactor () {
    let result = 0

    if (this._hasChinaHistory) {
      result += 3
      if (this._voyage.length > 12) result += 1
      if (this._voyage.length > 18) result -= 1
    } else {
      result = super._voyageLengthFactor
    }

    return result
  }

  get _historyLengthFactor () {
    let result = 0

    if (this._hasChinaHistory && this._history.length > 10) {
      result += 1
    } else {
      result = super._historyLengthFactor
    }

    return result
  }

  get _voyageRisk () {
    return Math.max(super._voyageRisk + 4, 0)
  }

  get _captainHistoryRisk () {
    let result = super._captainHistoryRisk

    if (this._hasChinaHistory) {
      result -= 2
    }

    return Math.max(result, 0)
  }
}

class VoyageEastIndiesRating extends Rating {
  get _voyageProfitFactor () {
    return super._voyageProfitFactor + 1
  }

  get _voyageRisk () {
    return Math.max(super._voyageRisk + 4, 0)
  }
}
