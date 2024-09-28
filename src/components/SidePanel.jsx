import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from './SidePanel.module.css';

export default function SidePanel() {

    return (
        <div className={styles.panel}>
            <Link to='/'>
                <Logo />
            </Link>
            <div className={styles.appnav}>
                <NavLink to='cities'><div className={styles.row}>CITIES</div></NavLink>
                <NavLink to='countries'><div className={styles.row}>COUNTRIES</div></NavLink>
            </div>
            <Outlet />
        </div>
    )
}
