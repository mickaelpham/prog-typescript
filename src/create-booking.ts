type Reservation = string | undefined

type CreateBooking = {
  (from: Date, destination: string): Reservation
  (from: Date, to: Date, destination: string): Reservation
}

const createBooking: CreateBooking = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const locale = 'en-US'

  if (toOrDestination instanceof Date && destination !== undefined) {
    return `round-trip ticket for ${destination} from ${from.toLocaleDateString(
      locale,
      options
    )} to ${toOrDestination.toLocaleDateString(locale, options)}`
  } else if (typeof toOrDestination === 'string') {
    return `one-way ticket for ${toOrDestination} on ${from.toLocaleDateString(
      locale,
      options
    )}`
  }
}

export default createBooking
