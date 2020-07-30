import React from 'react'
import { Divider, Grid, Header, Segment } from 'semantic-ui-react'

import { ErrorMessage, InfoPopup, InfoText } from './components'

function App () {
  return (
    <Segment basic>
      <Grid columns='equal' relaxed='very'>
        <Grid.Column>
          <Header size='large' content='Components' />
          <Grid.Row>
            <Segment>
              <Header size='medium' content='<InfoPopup>' />
              <InfoPopup
                text='Information'
                position='right center'
                trigger={<p>Hover over me!</p>}
              />
            </Segment>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Segment>
              <Header size='medium' content='<InfoText>' />
              <InfoText text='Information' />
            </Segment>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Segment>
              <Header size='medium' content='<ErrorMessage>' />
              <ErrorMessage error='An error occured' />
            </Segment>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column />
        <Grid.Column />
      </Grid>
    </Segment>
  )
}

export default App
