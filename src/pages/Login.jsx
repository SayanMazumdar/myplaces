import Navigation from "../components/Navigation";
import styles from "./Login.module.css";

export default function Login() {
    return (
        <div className={styles.layout}>
            <Navigation />
            <div className={styles.login}>
                <form>
                    <div className={styles.formRow}>
                        <label htmlFor="mail">Email address</label>
                        <input type="email" name="email" id="mail" />
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="code">Password</label>
                        <input type="password" name="password" id="code" />
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    )
}
