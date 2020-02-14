/* eslint-disable no-unused-vars */
'use strict'

export { getRawCustomersData, getCustomersDataObject, compareUsageWithTheYearBefore }

const customersData = {
  1920: {
    name: 'martin',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55
        // remaining months of the year
      },
      2015: {
        1: 70,
        2: 63
        // remaining months of the year
      }
    }
  },
  38673: {
    name: 'neal',
    id: '38673'
    // more customers in a similar form
  }
}

class CustomersData {
  constructor (data) {
    this._data = data
  }

  setUsage (customerId, year, month, amount) {
    this._data[customerId].usages[year][month] = amount
  }

  usage (customerID, year, month) {
    return this._data[customerID].usages[year][month]
  }
}

let customersDataObject = new CustomersData(customersData)

function compareUsageWithTheYearBefore (customerId, laterYear, month) {
  const later = getCustomersDataObject().usage(customerId, laterYear, month)
  const earlier = getCustomersDataObject().usage(customerId, laterYear - 1, month)
  return { laterAmount: later, change: later - earlier }
}

function getRawCustomersData () {
  return customersData
}

function getCustomersDataObject () {
  return customersDataObject
}

// noinspection JSUnusedLocalSymbols
function getRawDataOfCustomersDataObject () {
  return customersDataObject._data
}

// noinspection JSUnusedLocalSymbols
function setRawDataOfCustomersDataObject (arg) {
  customersDataObject = new CustomersData(arg)
}
