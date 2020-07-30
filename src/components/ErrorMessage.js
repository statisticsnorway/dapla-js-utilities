import React from 'react'
import { Message } from 'semantic-ui-react'

import { getNestedObject } from '../utilities'

const ERROR = {
  en: 'Error',
  nb: 'Problem'
}

const COMMON_API = {
  ERROR_PATH: ['response', 'data'],
  ERROR_STATUS_PATH: ['response', 'statusText']
}

function ErrorMessage ({ error, title, language = 'nb' }) {
  const resolveError = getNestedObject(error, COMMON_API.ERROR_PATH)
  const alternateResolveError = getNestedObject(error, COMMON_API.ERROR_STATUS_PATH)

  return (
    <Message
      error
      header={title ? title : ERROR[language]}
      content={resolveError === undefined ? alternateResolveError === undefined ?
        error.toString() : alternateResolveError : resolveError
      }
    />
  )
}

export default ErrorMessage
