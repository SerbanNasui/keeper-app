import React, {useState} from 'react'

const Register = () => {

    const [user,setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {name,email,password,confirmPassword} = user;

    const onChange = e => setUser({...user,[e.target.name]:e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className='form-container'>
            <h1>Account <span className='text-primary'>Register</span></h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={name} onChange={(e) => setUser({...user,name: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={(e) => setUser({...user,email: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={(e) => setUser({...user,password: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setUser({...user,confirmPassword: e.target.value})} />
                </div>
                <button type='submit' className='btn btn-primary btn-block'>Register</button>
            </form>
        </div>
    )
}

export default Register
