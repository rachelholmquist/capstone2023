import {useState} from 'react'


const Auth = () => {
    const [register, setRegister] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
    <form className='form' onSubmit={submitHandler}>
                <input 
                    type='text' 
                    placeholder='username' 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='form-input'/>
                <input 
                    type='password' 
                    placeholder='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='form-input'/>
                <button className='form-btn'>
                    {register ? 'Sign Up' : 'Login'}
                </button>
            </form>
    )
}

export default Auth