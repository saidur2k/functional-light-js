import {expect} from 'chai'

describe('exclusion using filter', () => {
  it('isOdd', () => {
    expect(isOdd(3)).to.be.true
  })

  it('exclusion', () => {
    expect([1, 2, 3, 4, 5].filter(isOdd)).to.deep.equal([1, 3, 5])
  })
})

var isOdd = (v) => v % 2 === 1
