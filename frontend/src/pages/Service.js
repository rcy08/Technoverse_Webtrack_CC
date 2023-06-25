import { useParams, useNavigate } from 'react-router-dom';

const Service = () => {
    
    const serviceName = useParams().serviceName;
    const navigate = useNavigate();

    const handleClick = async () => {
        if(!localStorage.getItem('userToken')) navigate('/login');
        else{
            const response = await fetch('/bookings/')
        }
    }

    return (
        <div className="container">

            <h1> {serviceName} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora accusamus eos neque sequi harum laboriosam temporibus velit ab impedit, cumque, distinctio nihil?</p>
            <button className="btn btn-dark" onClick={handleClick}> Book Service </button>
            
        </div>
    );
}
 
export default Service;