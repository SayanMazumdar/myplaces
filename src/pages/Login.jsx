import Navigation from "../components/Navigation";
import styles from "./Login.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const { onLogin, isAuthenticated } = useAuth();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        
        if (!mail || !password) {
            alert('Please enter username and password to login!');
            return
        }    
        onLogin({ username: mail, password });             
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/myplaces');
        }
    }, [isAuthenticated, navigate])

    return (
        <div className={styles.layout}>
            <Navigation />
            <div className={styles.login}>
                <form>
                    <div className={styles.formRow}>
                        <label htmlFor="mail">Email address</label>
                        <input type="email" name="email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="code">Password</label>
                        <input type="password" name="password" id="code" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" onClick={handleLogin}>LOGIN</button>
                </form>
            </div>
        </div>
    )
}
