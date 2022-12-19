import {
  Outlet,
  Link
} from 'react-router-dom'

// CSS
import styles from './layout.module.css'

function LandingPage() {
  return (
    <>
    {/* header */}
      <header>
        <h1>Landing Page</h1>
        <nav>
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
      <a href="www.github.com">GitHub</a>
      </footer>
    </>
  )
}

export default LandingPage;