import React from 'react'
import { Popup } from 'semantic-ui-react'

import InfoText from './InfoText'

function InfoPopup ({ text, position, trigger }) {
  return (
    <Popup basic flowing size='large' position={position} trigger={trigger}>
      <InfoText text={text} />
    </Popup>
  )
}

export default InfoPopup
