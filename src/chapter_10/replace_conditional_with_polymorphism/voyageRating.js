'use strict'

export {
  rating,
}

function rating (voyage, history) {
  return new Rating(voyage, history).value
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

    if (this._voyage.zone === 'china') result += 1
    if (this._voyage.zone === 'east-indies') result += 1
    if (this._voyage.zone === 'china' && this._hasChinaHistory) {
      result += 3
      if (this._history.length > 10) result += 1
      if (this._voyage.length > 12) result += 1
      if (this._voyage.length > 18) result -= 1
    } else {
      if (this._history.length > 8) result += 1
      if (this._voyage.length > 14) result -= 1
    }

    return result
  }

  get _hasChinaHistory () {
    return this._history.some(v => v.zone === 'china')
  }

  get _voyageRisk () {
    let result = 1

    if (this._voyage.length > 4) result += 2
    if (this._voyage.length > 8) result += this._voyage.length - 8
    if (['china', 'east-indies'].includes(this._voyage.zone)) result += 4

    return Math.max(result, 0)
  }

  get _captainHistoryRisk () {
    let result = 1

    if (this._history.length < 5) result += 4

    result += this._history.filter(v => v.profit < 0).length

    if (this._voyage.zone === 'china' && this._hasChinaHistory) result -= 2

    return Math.max(result, 0)
  }
}
