import styles from './Navigation.module.css';
import icon from '../assets/icon.png'
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link to='/'>
        <div className={styles.logo}>
          <img src={icon} alt="logo" height='50px' />
          <h1>MyPlaces</h1>
        </div>
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
