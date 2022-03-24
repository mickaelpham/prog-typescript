import fibonacciGenerator from './fibonacci-generator'

describe('fibonacciGenerator', () => {
  const expected = [0, 1, 1, 2, 3, 5, 8, 13]
  const fibonacci = fibonacciGenerator()

  test('generates a fibonacci sequence on each call', () => {
    for (const n of expected) {
      expect(fibonacci.next().value).toEqual(n)
    }
  })
})
