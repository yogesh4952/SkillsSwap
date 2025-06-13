import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import CreateProfile from './components/CreateProfile';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/edit-profile' element={<CreateProfile />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
