import { getLocalizedGsimObjectText } from '../utilities'

const goodObject = [
  {
    'languageCode': 'en',
    'languageText': 'Text'
  },
  {
    'languageCode': 'nb',
    'languageText': 'Tekst'
  }
]

describe('Retrieving localized GSIM object text works correctly when provided with a ', () => {
  test('good object', () => {
    const text = getLocalizedGsimObjectText('nb', goodObject)

    expect(text).toBe('Tekst')
  })

  test('good object but non existing language', () => {
    const text = getLocalizedGsimObjectText('de', goodObject)

    expect(text).toBe('Text')
  })

  test('good object but bad first entry', () => {
    const object = [false]
    const text = getLocalizedGsimObjectText('nb', object)

    expect(text).toBe('-')
  })

  test('bad object', () => {
    const object = false
    const text = getLocalizedGsimObjectText('nb', object)

    expect(text).toBe('-')
  })

  test('empty object', () => {
    const object = []
    const text = getLocalizedGsimObjectText('nb', object)

    expect(text).toBe('-')
  })
})
