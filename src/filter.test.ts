import filter from './filter'

describe('filter', () => {
  test('with an array of numbers', () => {
    const got = filter([1, 2, 3, 4, 5], (n) => n < 3)

    expect(got).toEqual([1, 2])
  })

  test('with an array of strings', () => {
    const got = filter(
      ['bob', 'anais', 'laurent', 'jean'],
      (name) => name.length < 5
    )

    expect(got).toEqual(['bob', 'jean'])
  })

  test('with an array of objects', () => {
    const array = [
      { firstName: 'bob' },
      { firstName: 'blake' },
      { firstName: 'catherine' },
      { firstName: 'jenny' },
    ]

    const got = filter(array, (obj) => obj.firstName.startsWith('b'))

    expect(got).toEqual([{ firstName: 'bob' }, { firstName: 'blake' }])
  })
})
