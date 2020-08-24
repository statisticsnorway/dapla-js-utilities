import React from 'react'
import { Container, Divider, List } from 'semantic-ui-react'

const APP_VERSION = {
  en: 'App version',
  nb: 'App versjon'
}

function SimpleFooter ({ appVersion, language = 'nb', sourceUrl }) {
  return (
    <Container fluid textAlign='center'>
      <Divider />
      <List horizontal divided link size='small' style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <List.Item as='a' href={`${sourceUrl}`} icon={{ fitted: true, name: 'github' }} />
        <List.Item content={`${APP_VERSION[language]}: ${appVersion}`} />
      </List>
    </Container>
  )
}

export default SimpleFooter
