import Logo from './Logo';
import styles from './Navigation.module.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link to='/'>
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink to='/product'>PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>PRICING</NavLink>
        </li>
        <li>
          <NavLink to='/login'><button>LOG IN</button></NavLink>
        </li>
      </ul>
    </nav>
  )
}
