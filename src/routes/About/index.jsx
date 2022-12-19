// Libraries
import { useContext } from 'react';

// Contexts
import AboutContext from '../../contexts/AboutContext';

// CSS specific to this component
import styles from './layout.module.css'

function AboutPage() {
  const dataBio = useContext(AboutContext)

  return (
    <>
      <div className={styles.splashCard}>
        <h1>{dataBio.nameFirst + " " + dataBio.nameMiddle}</h1>
      </div>
    </>
  )
}

export default AboutPage;