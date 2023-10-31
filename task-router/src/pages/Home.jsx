import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className='home text'>
      <p>Vielen Dank für diese Gelegenheit.</p>
      <br />
      <p>Diese Anwendung wurde erstellt, um die Verwendung der React-Komponenten und des Pakets „react-router-dom“ zu testen.
        Sie können sie über die Schaltflächen „Home“ und „Details“ in der Navigationsleiste testen. </p>
      <br />
      <p>Für weitere Informationen über den Entwickler besuchen Sie bitte die Github-Seite oder die Portfolio-Seite.</p>
      <br />
      <p>Viel Spaß beim Ausprobieren!</p>
    </Container>
  )
}

export default Home