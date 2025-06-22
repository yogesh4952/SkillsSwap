import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import EditProfileLayout from './components/EditProfileLayout';
import BasicInfo from './pages/BasicInfo';
import Skills from './pages/Skills';
import LearningGoals from './pages/LearningGoals';
import Sessions from './components/Sessions';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/edit-profile' element={<EditProfileLayout />}>
          <Route path='basic-info' element={<BasicInfo />} />
          <Route path='skills' element={<Skills />} />
          <Route path='learning-goals' element={<LearningGoals />} />
          {/* Default page under create-profile */}
          <Route index element={<BasicInfo />} />
        </Route>

        <Route path='/sessions' element={<Sessions />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
