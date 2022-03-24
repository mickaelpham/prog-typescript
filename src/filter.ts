type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

const filter: Filter = (array, f) => {
  const result = []

  for (const item of array) {
    if (f(item)) result.push(item)
  }

  return result
}

export default filter
