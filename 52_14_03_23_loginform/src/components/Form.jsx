import { useState } from "react"
import './Form.css';
export const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const usernameValue = (event) => {
        setUsername(event.target.value);
        return username;
    }

    const passwordValue = (event) => {
        setPassword(event.target.value);
        return password;
    }

    const stars = (word) => {
        let coded = '';
        for(let i = 0; i < word.length; i++) {
            coded += '*';
        }

        return coded;
    }

    const codedPass = stars(password);

    const login = (event) => {
        event.preventDefault();
        alert(`Username: ${username} \nPassword: ${codedPass}`);
    }

    const reset = () => {
        setUsername('');
        setPassword('');
    }

    return (
        <div className="formDiv">
            <h3>Login form</h3>
            <form action="">
                <h4>Login</h4>
                <input type="text" placeholder="Username" onChange={usernameValue}/>
                <input type="password" placeholder="Password" onChange={passwordValue}/>
                <button className="logButton" onClick={login}>Login</button>
                <button className="resetButton" onClick={reset}>Reset</button>
            </form>
        </div>
    );
}