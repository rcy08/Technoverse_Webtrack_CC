import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PrivateRoute from './utils/PrivateRoute';
import AccountDetails from './pages/AccountDetails';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Service from './pages/Service';
import UserBookings from './pages/UserBookings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          
          <Route element={<PrivateRoute />} > 
            <Route path='/account-details' element={<AccountDetails />} />
            <Route path='/my-bookings' element={<UserBookings />} />
            <Route />
          </Route>
          
          <Route 
            path='/'
            element={<Home />}
          />
          <Route
            path='/services'
            element={<Services />}
          />
          <Route 
            path='/services/:type/:serviceName'
            element={<Service />}
          />
          <Route 
            path='/signup'
            element={<Signup />}
          />
          <Route 
            path='/login'
            element={<Login />}
          />
          <Route
            path='/forgot-password'
            element={<ForgotPassword />}
          />
          <Route
            path='/reset-password/:resetToken'
            element={<ResetPassword />}
          />
          <Route 
            path='*'
            element={<Error />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
