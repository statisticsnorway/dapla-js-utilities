import React from 'react'
import { Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'

import ssb_logo_rgb from './components/ssb-logo-rgb.svg'
import { ErrorMessage, InfoPopup, InfoText, SimpleFooter } from './components'

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
          <Divider hidden />
          <Grid.Row>
            <Segment>
              <Header size='medium' content='Statistics Norway Logo (svg)' />
              <Image size='medium' src={ssb_logo_rgb} />
            </Segment>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Segment>
              <Header size='medium' content='<SimpleFooter>' />
              <SimpleFooter appVersion={process.env.REACT_APP_VERSION} sourceUrl={process.env.REACT_APP_SOURCE_URL} />
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
