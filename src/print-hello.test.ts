import { printHello } from './print-hello'

class StubWriter {
  lastReceived: string | null = null

  log(msg: string) {
    this.lastReceived = msg
  }
}

describe('printHello', () => {
  const writer = new StubWriter()

  test('sends hello message to writer', () => {
    printHello(writer, 'Jeanne', 'en-US')

    expect(writer.lastReceived).toEqual('Hello Jeanne')
  })

  test('sends translated message to writer', () => {
    printHello(writer, 'Laurent', 'fr-FR')

    expect(writer.lastReceived).toEqual('Bonjour Laurent')
  })

  test('defaults to en-US in case of unknown locale', () => {
    // @ts-expect-error: Passing incorrect value to function on purpose
    printHello(writer, 'Marc', 'unknown-locale')

    expect(writer.lastReceived).toEqual('Hello Marc')
  })

  test('handles es-ES locale', () => {
    printHello(writer, 'Juan', 'es-ES')

    expect(writer.lastReceived).toEqual('Holá Juan')
  })
})
