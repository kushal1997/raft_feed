import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Navbar from './cmponents/Navbar';
import { far } from '@fortawesome/free-regular-svg-icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Fragment, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ModalSetting from './cmponents/modals/ModalSetting';
import Login from './pages/Login';
import ProfileEdit from './pages/ProfileEdit';
import Settings from './pages/Settings';
import ChangePassword from './pages/ChangePassword';

library.add(fas, far);
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Fragment>

      <Routes>
        <Route path='/' exact element={
          <>
            <Navbar />
            <Home />
          </>
        }
        ></Route>
        <Route path='/gigo6969' exact element={
          <>
            <Navbar />
            <Profile setIsModalOpen={setIsModalOpen} />
          </>
        }
        ></Route>
        <Route path='/account/login' exact element={
          <>
            <Login />
          </>
        }
        ></Route>
        <Route
          path="/accounts"
          element={
            <>
              <Navbar />
              <div className="container pt-8 max-w-5xl">
                <Settings />
              </div>
            </>
          }
        >
          <Route index element={<Navigate to="edit" replace />} />
          <Route path="edit" element={<ProfileEdit />} />
          <Route path='change_password' element={<ChangePassword/>}/>
        </Route>
      </Routes>
      <ModalSetting isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </Fragment>
  );
}

export default App;
