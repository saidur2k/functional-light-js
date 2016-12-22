import {expect} from 'chai'

describe('iteration using .forEach', () => {
  it('iterate over array', () => {
    [1, 2, 3, 4, 5].forEach(logValue)
    expect(1).to.be.equal(1)
  })
})

var logValue = (v) => console.log(v)
