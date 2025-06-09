import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import EditProfile from './components/CreateProfile';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/edit-profile' element={<EditProfile />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
