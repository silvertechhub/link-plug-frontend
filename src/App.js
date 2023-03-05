import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import CreateTree from './components/CreateTree';
import Home from './components/Home';
import UniqueLink from './components/UniqueLink';
import PlugLinks from './components/PlugLinks';
import ProfilePage from './components/ProfilePage'
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import { AuthHook } from './hooks/authHooks'
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

export const URL = process.env.REACT_APP_SERVER

function App() {
  const { user } = AuthHook()
  return (
    <div className="">
    
      
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword/:token/:id' element={<ResetPassword />} />
        <Route path='/create' element={!user ? <Login/> : <CreateTree/> } />
        <Route path='/uniquelink' element={!user ? <Login/> : <UniqueLink /> } />       
        <Route path='/profile' element={!user ? <Login/> : <ProfilePage /> } />       
        <Route path='/signup' element={user ? <UniqueLink /> : <Signup /> } />
        <Route path='/login' element={user ? <UniqueLink /> : <Login/>  } />
        <Route path='/:displayNames' element={ <PlugLinks /> } />
        <Route
           path="*"
           element={
              <main style={{ padding: "1rem" }}>
                <p>404! There's nothing here!</p>
              </main>
            }
         />
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
