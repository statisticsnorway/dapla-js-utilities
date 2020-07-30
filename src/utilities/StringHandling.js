export const truncateString = (string, length = 32) => {
  if (typeof string === 'string') {
    return string.length > length ? string.substring(0, length) + '...' : string
  } else {
    return '...'
  }
}
