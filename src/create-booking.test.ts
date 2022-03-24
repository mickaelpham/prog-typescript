import createBooking from './create-booking'

describe('createBooking', () => {
  test('one-way trip', () => {
    expect(createBooking(new Date('2022-01-31'), 'San Francisco')).toEqual(
      'one-way ticket for San Francisco on Monday, January 31, 2022'
    )
  })

  test('roundtrip', () => {
    expect(
      createBooking(
        new Date('2022-01-31'),
        new Date('2022-02-15'),
        'New York City'
      )
    ).toEqual(
      'round-trip ticket for New York City from Monday, January 31, 2022 ' +
        'to Tuesday, February 15, 2022'
    )
  })
})
