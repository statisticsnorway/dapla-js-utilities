import React from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import App from '../App'

jest.mock('../components/ErrorMessage', () => () => null)

global.scrollTo = jest.fn()

const setup = () => {
  const { getByTestId, getByText } = render(<App />)

  return { getByTestId, getByText }
}

test('Renders basics', () => {
  const { getByText } = setup()

  expect(getByText('Components')).toBeInTheDocument()
})

test('dapla-js-utilities-scroll-to-top-button', () => {
  const { getByTestId } = setup()

  userEvent.click(getByTestId('dapla-js-utilities-scroll-to-top-button'))
})
