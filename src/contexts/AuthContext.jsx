import { createContext, useContext, useState } from "react"

const AuthContext = createContext();
const USER = {
    username: 'Sayan.Mazumdar@test.com',
    password: 'Sayan@1234'
}

function AuthProvider({ children }) {

    const [loggedUser, setLoggedUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function onLogin({ username, password }) {
        if (username === USER.username && password === USER.password) {
            setIsAuthenticated(true);
            setLoggedUser({username, avater: ""});
            return true;
        }
        else {
            alert('The provider Username or password is incorrect');
        }
    }
    return (
        <AuthContext.Provider value={{ onLogin, loggedUser, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        console.error('Context being used outside of provider component!');
        return
    }
    return context
}

export { AuthProvider, useAuth }

