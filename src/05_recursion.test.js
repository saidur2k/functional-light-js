import {expect} from 'chai'

describe('recursion', () => {
  it('sum two parameters', () => {
    expect(sumRecur(1, 2)).to.be.equal(3)
  })

  it('sum three parameters', () => {
    expect(sumRecur(1, 2, 3)).to.be.equal(6)
  })
})

var sumRecur = function (...args) {
  if (args.length <= 2) {
    return args[0] + args[1]
  }

  return (args[0] + sumRecur(...args.slice(1)))
}
