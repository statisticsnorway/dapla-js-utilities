import { truncateString } from '../utilities'

describe('String truncation works correctly when provided with a ', () => {
  test('string and a length', () => {
    const string = 'This is a story'
    const truncatedString = truncateString(string, 10)

    expect(truncatedString).toBe('This is a ...')
  })

  test('short string', () => {
    const shortString = 'This is a story all about how'
    const truncatedString = truncateString(shortString)

    expect(truncatedString).toBe('This is a story all about how')
  })

  test('long string', () => {
    const longString = 'This is a story all about how a string got cut off'
    const truncatedString = truncateString(longString)

    expect(truncatedString).toBe('This is a story all about how a ...')
  })

  test('non-string', () => {
    const nonString = false
    const truncatedString = truncateString(nonString)

    expect(truncatedString).toBe('...')
  })
})
