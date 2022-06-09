import React, {useState} from 'react'

const Login = () => {

    const [user,setUser] = useState({
        email: '',
        password: '',
    });

    const {email,password} = user;

    const onChange = e => setUser({...user,[e.target.name]:e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className='form-container'>
            <h1>Account <span className='text-primary'>Login</span></h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={(e) => setUser({...user,email: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={(e) => setUser({...user,password: e.target.value})} />
                </div>
                <button type='submit' className='btn btn-primary btn-block'>Login</button>
            </form>
        </div>
    )
}

export default Login
