import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Navbar from './cmponents/Navbar';
import { far } from '@fortawesome/free-regular-svg-icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ModalSetting from './cmponents/modals/ModalSetting';

library.add(fas, far);
function App() {
  const [isModalOpen,setIsModalOpen]=useState(false);
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
            <Profile setIsModalOpen={setIsModalOpen}/>
          </>
        }
        ></Route>
      </Routes>
      <ModalSetting isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
    </Fragment>
  );
}

export default App;
