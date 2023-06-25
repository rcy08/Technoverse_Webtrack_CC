import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Service = () => {

    const [error, setError] = useState('');
    const [user, setUser] = useState({});

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
          setError(data.error);
        }

        if (data.success) {
          setUser(data);
        }

      };


      fetchPrivateData();

    }, []);
    
    const { type, serviceName } = useParams();
    const [status, setStatus] = useState();
    const navigate = useNavigate();

    const handleClick = async () => {
        if(!localStorage.getItem('userToken')) navigate('/login');
        else{
            const response = await fetch(`/bookings/${user.id}/${type}`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({ serviceName })
            });

            const data = await response.json();

            if(data.error){
                setStatus(data.error);
            }
            if(data.success){
                setStatus(data.data);
            }
        }
    }

    return (
        <div className="container">

            <h1> {serviceName} </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button className="btn btn-dark" onClick={handleClick}> Book Service </button>
            <h2>{status}</h2>
            
        </div>
    );
}
 
export default Service;