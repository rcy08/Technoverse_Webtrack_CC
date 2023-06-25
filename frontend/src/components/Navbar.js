const Navbar = () => {
    return (
        <nav id='navbar'>
          <ul>
            <li> <a href='/account-details' className='links'> Your Account</a> </li>
            <li> <a href='/my-bookings' className='links'> Your Bookings </a> </li>
            <li> <a href='/services' className='links'> Services </a> </li>
          </ul>
        </nav>
    );
}
 
export default Navbar;