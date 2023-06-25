import { useEffect, useState } from "react";

const UserBookings = () => {

    const [tot, setTot] = useState(null);

    useEffect(() => {
        const getbookings = async () => {
            const response = await fetch('/my-bookings', {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });

            const data = await response.json();

            console.log(data);

            setTot(data.data);
        };

        getbookings();
        
    }, []);

    return (
        <div className="container">
            <div className="box">
                <h3>Your total no. of bookings: {tot} </h3>
            </div>
        </div>
    );
}
 
export default UserBookings;