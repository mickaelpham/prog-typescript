import sum from './sum'

describe('sum', () => {
  test('accepts a single argument', () => {
    expect(sum(23)).toEqual(23)
  })

  test('accepts multiple arguments', () => {
    expect(sum(2, 3)).toEqual(5)
  })

  test('accepts a variable number of arguments', () => {
    expect(sum(1, 2, 3, 4, 5)).toEqual(15)
  })
})
