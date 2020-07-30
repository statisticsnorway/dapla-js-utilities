import React from 'react'
import { Icon } from 'semantic-ui-react'

import { SSB_COLORS } from '../configurations'

function InfoText ({ text }) {
  return (
    <>
      <Icon name='info circle' style={{ color: SSB_COLORS.BLUE }} />
      {text}
    </>
  )
}

export default InfoText
