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
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </nav>
      </header>

      {/* Here we will put all our "subpages" */}
      <main className={styles.grow}>
        <Outlet />
      </main>

    {/* footer */}
      <footer>
      <a href="https://github.com/LarsGKodehode/portfolio-structure">GitHub</a>
      </footer>
    </div>
  )
}

export default LandingPage;