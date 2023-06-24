import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data.errors) {
          setErrors(data.errors);
        }
        if (data.user) {
          setEmail('');
          setPassword('');
          setErrors({});
          console.log(data.user);

          localStorage.setItem(`userToken`, `Bearer ${data.token}`);
          navigate('/');
        }
    }

    return (
      <div className="container">
        <div className="login-box">
          <h1 className="h-primary"> <Link to="/login" className='head'> Login Form </Link> </h1>
          <form onSubmit={handleSubmit}>

            <label className="label"> Email: </label>
            <input type="email" name="email" id="email" placeholder="Email"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="email-error"> {errors.email} </div>


            <label className="label">Password: </label>
            <input type="password" name="password" id="password" placeholder="Password" 
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password-error"> {errors.password} </div>


            <Link to="/forgot-password" className='links'> Forgot Password? </Link>

            <button className="btn-login"> Login </button>

          </form>
          <h4 className="text"> Don't have an account? <Link to='/signup' className='links'> Signup </Link> </h4>
          <h4> <Link to='/' className='links'> Home </Link> </h4>
        </div>
      </div>
    );
}

export default Login;