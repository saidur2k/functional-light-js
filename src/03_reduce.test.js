import {expect} from 'chai'

describe('list composition using reduce', () => {
  it('multiply, fully compose values together', () => {
    expect([1, 2, 3, 4, 5].reduce((prevVal, elem) => prevVal * elem, 1)).to.be.equal(120)
  })

  it('sum, fully compose values together', () => {
    expect([1, 2, 3, 4, 5].reduce((prevVal, elem) => prevVal + elem, 0)).to.be.equal(15)
  })

  it('returns partial set', () => {
    // friends - an array of objects
    // where object field "books" - list of favorite books
    const friends = [
      { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
      { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
      { name: 'Alice', books: ['The Lord of the Rings', 'The Shining'], age: 18 }
    ]

    // allbooks - list which will contain all friends books +
    // additional list contained in initialValue
    var allbooks = friends.reduce(function (prev, curr) {
      return [...prev, ...curr.books]
    }, ['Alphabet'])

    expect(allbooks).to.deep.equal(['Alphabet', 'Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining'])
  })
})

