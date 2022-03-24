interface Writer {
  log(msg: string): void
}

type Locale = 'en-US' | 'fr-FR' | 'es-ES'

const prefixFor = (locale: Locale) => {
  switch (locale) {
    case 'fr-FR':
      return 'Bonjour'
    case 'es-ES':
      return 'Holá'
    default:
      return 'Hello'
  }
}

const sayHello = (name: string, locale: Locale) =>
  `${prefixFor(locale)} ${name}`

export const printHello = (w: Writer, name: string, locale: Locale) =>
  w.log(sayHello(name, locale))
