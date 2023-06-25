import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from './Service';

const AccountDetails = () => {

    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

      const fetchPrivateData = async () => {

        setError('');
        setUser('');

        const response = await fetch('/account-details', {
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
        });

        const data = await response.json();

        if (data.error) {
          // setError(data.error);
        }

        if (data.success) {
          setUser(data);
        }

      };


      fetchPrivateData();

    }, []);

    const handleLogout = async () => {
      
      localStorage.removeItem('userToken');
      navigate('/');
      
    }

    return (
      <div className="container">
        <div className="box">
          
          {user && (
            <div>
              <h1> Hello, {user.email} </h1>
              <button onClick={handleLogout}> Logout </button>
            </div>
          )}

          {error && <h2> {error} </h2>}

        </div>
      </div>
    );
}
 
export default AccountDetails;