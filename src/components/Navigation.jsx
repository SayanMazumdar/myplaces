import styles from './Navigation.module.css';
import icon from '../assets/icon.png'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={icon} alt="logo" height='50px'/>
        <h1>MyPlaces</h1>
      </div>
      <ul>
        <li>PRODUCT</li>
        <li>PRICING</li>
        <li><button>LOG IN</button></li>
      </ul>
    </nav>
  )
}
