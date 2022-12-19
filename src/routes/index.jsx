import {
  Outlet,
  Link
} from 'react-router-dom'

// CSS specific to this component
import styles from './layout.module.css'

function LandingPage() {
  return (
    <div className={styles.app}>
    {/* header */}
      <header className={styles.navbar}>
        <h3>Landing Page</h3>
        <nav className={styles.navLinks}>
          <Link className={styles.link} to='/'>Home</Link>
          <Link className={styles.link} to='/About'>About</Link>
          <Link className={styles.link} to='/Contact'>Contact</Link>
        </nav>
      </header>

      {/* Here we will put all our "subpages" */}
      <main className={styles.grow}>
        <Outlet />
      </main>

    {/* footer */}
      <footer className={styles.footer}>
      <a className={styles.link} target='_blank' rel='noreferrer' href="https://github.com/LarsGKodehode/portfolio-structure">GitHub</a>
      </footer>
    </div>
  )
}

export default LandingPage;