import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { AuthHook } from '../hooks/authHooks'
import logo from '../assets/logo.svg'
import {MenuAlt2Icon, XIcon } from '@heroicons/react/solid'

export default function Navbar() {
    const { logout } = useLogout()
    const {user} = AuthHook()
    const [nav, setNav] = useState(false)
    const handletoggle = () => setNav(!nav);
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
    } 

      // google translator
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
       
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  },[]);

  return (
    <nav className="w-full bg-white shadow sticky top-0 ">
       <div className='shadow-md flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
      {/* <div id="google_translate_element"></div> */}
      <div className='pt-8 px-6 flex items-center justify-between py-3 md:py-5 md:block'>
        <Link to='/'> <img src={logo}  alt='logo' className=''  /></Link>
         <div onClick={handletoggle} className="md:hidden ">
              {!nav ? <MenuAlt2Icon  className='w-5'/> : <XIcon className='w-5'/> }
          </div>
      </div>
      <div className=' mr-6   flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-6'> 
        <ul className={ ' items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'}>
         <li className=' font-bold'> <Link to='/'>Home</Link></li>
         <li className=''> <Link to='/uniquelink'>Dashboard</Link></li>
         <li className=''><Link to='/profile'>Profile</Link></li>
         <li className=''><Link to='/'>Premium</Link></li>
         <li className=''><Link to='/create'>Create</Link></li>
         {!user? 
         <li className=' px-3 py-1  rounded-lg bg-sec text-white' onClick={() => navigate('/login')}>Sign In</li> :
         <button className='px-3 py-1 rounded-lg bg-sec text-white' onClick={handleLogout}>Log out</button>}
         
        </ul>
          
        </div>
        
      {!user && (<div className='hidden'>
          <div><Link to='/signup'>Sign up</Link></div>
          <div><Link to='/login'>login</Link></div>
        </div>)} 

        {/* {user && (
          <div>
         
        <div > 
        <ul className={!nav? 'hidden' : '  bg-black bg-opacity-90 z-10 text-center w-full px-8 text-white'}>
         <li className='my-8 w-full font-bold'> <Link to='/'>Home</Link></li>
         <li className='my-8 w-full'> <Link to='/uniquelink'>Dashboard</Link></li>
         <li className='my-8 w-full'><Link to='/profile'>Profile</Link></li>
         <li className='my-8 w-full'><Link to='/'>Premium</Link></li>
         <li className='my-8 w-full'><Link to='/create'>Create</Link></li>
          <button className='my-5 p-2 rounded-lg bg-green-50' onClick={handleLogout}>Log out</button>
        </ul>
          
        </div>
        </div>)}
         */}
    </div>
   
    </nav>
     )
}
