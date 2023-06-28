import {useState} from 'react'
import './Auth.css'
import Button from '../UI/Button'


const Auth = () => {
    const [register, setRegister] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (<main>
    <form className='register-form'>
                <input 
                    type='text' 
                    placeholder='username' 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='form-input'/><br/>
                <input 
                    type='password' 
                    placeholder='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='form-input'/><br/>
                <Button className='form-button'>
                    {register ? 'Sign Up' : 'Login'}
                </Button>
            </form>
            </main>
    )
}

export default Auth