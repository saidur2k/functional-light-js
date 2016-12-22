import {expect} from 'chai'

describe('transform using map', () => {
  it('doubles', () => {
    expect(doubleIt(2)).to.be.equal(4)
  })

  it('transforms', () => {
    expect([1, 2, 3, 4, 5].map(doubleIt)).to.deep.equal([2, 4, 6, 8, 10])
  })
})

var doubleIt = (v) => v * 2
