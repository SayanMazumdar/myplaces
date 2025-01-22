import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import styles from './UserBadge.module.css'
import { useEffect } from "react";

export default function UserBadge() {

    const { onLogout, loggedUser, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate])

    return (
        <div className={styles.badge}>
            <img src={loggedUser.picture} alt="User picture" className={styles.userPic}/>
            <p className={styles.welcome}>Welcome, {loggedUser.name}</p>
            <button className={styles.logoutBtn} onClick={() => onLogout()}>LOGOUT</button>
        </div>
    )
}
