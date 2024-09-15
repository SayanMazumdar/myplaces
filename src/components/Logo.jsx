import icon from '../assets/icon.png';
import styles from './Logo.module.css';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src={icon} alt="logo" height='50px' />
            <h1>MyPlaces</h1>
        </div>
    )
}
