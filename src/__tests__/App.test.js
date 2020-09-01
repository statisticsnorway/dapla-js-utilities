import React from 'react'
import { render } from '@testing-library/react'

import App from '../App'

jest.mock('../components/ErrorMessage', () => () => null)

const setup = () => {
  const { getByText } = render(<App />)

  return { getByText }
}

test('Renders basics', () => {
  const { getByText } = setup()

  expect(getByText('Components')).toBeInTheDocument()
})
