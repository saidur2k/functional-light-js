import {expect} from 'chai'

describe('map', () => {
  it('doubles', () => {
    expect(doubleIt(2)).to.be.equal(4)
  })

  it('transforms', () => {
    expect([1,2,3,4,5].map(doubleIt)).to.deep.equal([2,4,6,8,10])
  })
})

function doubleIt(v) {
  return v * 2
}

Array.map() method can be used to create immutable list transformations.
  The new list of transformed values has a one-to-one “mapping” with the original list.