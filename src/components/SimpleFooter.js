import React from 'react'
import { Container, Divider, Grid, Icon, List } from 'semantic-ui-react'

import { SSB_COLORS } from '../configurations'
import InfoPopup from './InfoPopup'

const APP_VERSION = {
  en: 'App version',
  nb: 'App versjon'
}

const SCROLL_TO_TOP = {
  en: 'Scroll to top',
  nb: 'Gå til toppen'
}

const SSB = {
  en: 'Statistics Norway',
  nb: 'Statistisk sentralbyrå'
}

function SimpleFooter ({ appVersion, language = 'nb', sourceUrl }) {
  return (
    <Container fluid>
      <Divider />
      <Grid columns='equal'>
        <Grid.Column verticalAlign='middle'>
          <InfoPopup
            position='right center'
            text={SCROLL_TO_TOP[language]}
            trigger={
              <Icon
                link
                size='large'
                name='arrow alternate circle up'
                style={{ color: SSB_COLORS.BLUE }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            }
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <List horizontal divided link size='small' style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <List.Item as='a' href={`${sourceUrl}`} icon={{ fitted: true, name: 'github' }} />
            <List.Item content={`${APP_VERSION[language]}: ${appVersion}`} />
          </List>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <List horizontal link size='small' style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <List.Item content={`${SSB[language]} © ${new Date().getFullYear()}`} />
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default SimpleFooter
