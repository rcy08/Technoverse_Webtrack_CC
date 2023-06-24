import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password === confirmpassword) {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.errors) {
          setErrors(data.errors);
        }
        if (data.user) {
          setEmail('');
          setPassword('');
          setConfirmpassword('');
          setErrors({});
          console.log(data.user);

          navigate('/');
        }

    }
    else {
        if(password.length < 6) {
            setErrors({
              password: 'Minimum length of password is 6 characters',
              confirmpassword: `Passwords don't match`,
            });
        }
        else {
            setErrors({
              confirmpassword: `Passwords don't match`,
            });
        }
    }
  }


  return (
    <div className="container">
      <div className="signup-box">

        <h1 className="h-primary"> <Link to='/signup' className='head'> Signup Form </Link> </h1>

        <form onSubmit={handleSubmit}>

          <label className="label"> Email: </label>
          <input type="email" name="email" id="email" placeholder="Email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="email-error"> {errors.email} </div>


          <label className="label"> Password: </label>
          <input type="password" name="password" id="password" placeholder="Password" 
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="password-error"> {errors.password} </div>


          <label className="label"> Confirm Password: </label>
          <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" 
            value = {confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <div className="confirmpassword-error"> {errors.confirmpassword} </div>


          <button className="btn-signup"> Signup </button>

        </form>

        <h4 className="text"> Already have an account? <Link to='/login' className='links'> Login </Link> </h4>
        <h4> <Link to='/' className='links'> Home </Link> </h4>

      </div>
    </div>
  );

};

export default Signup;
