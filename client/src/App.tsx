import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import EditProfileLayout from './components/EditProfileLayout';
import BasicInfo from './pages/Edit Profile/BasicInfo';
import Skills from './pages/Skills';
import LearningGoals from './pages/LearningGoals';
import Sessions from './components/Sessions';
import Message from './components/Message';
import StartLearning from './components/StartLearning';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/start-learning' element={<StartLearning />} />
        <Route path='/edit-profile' element={<EditProfileLayout />}>
          <Route path='basic-info' element={<BasicInfo />} />
          <Route path='skills' element={<Skills />} />
          <Route path='learning-goals' element={<LearningGoals />} />
          <Route
            index
            element={<Navigate to='/edit-profile/basic-info' replace />}
          />
        </Route>

        <Route path='/sessions' element={<Sessions />}></Route>

        <Route path='/messages' element={<Message />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
