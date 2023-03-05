import { AuthHook } from '../hooks/authHooks'
import {Link} from 'react-router-dom';
import { useLinkcontextHook } from '../hooks/linkcontextHook'
import axios from 'axios'
import Lottie from "react-lottie"
import animation from '../loader.json'
import { v4 as uuidv4 } from 'uuid'
import { CopyToClipboard } from "react-copy-to-clipboard";
import {ClipboardCopyIcon } from '@heroicons/react/solid'
import { URL } from '../App';

export default function Links({ handleButton}) {

  const { user } = AuthHook();
  const { userPlug, dispatch } = useLinkcontextHook();
  const handleDelete = async () => {
    if(window.confirm(`Are you sure you wanna delete this?`)){
      await axios.delete(`${URL}/api/routes/${userPlug[0]._id}`, {headers: 
        { 'Authorization': `Bearer ${user.token}`} 
        }).then((res) => {
          dispatch({type: 'DELETE_LINKS', payload:res.data})
         
        }).catch((err) => {console.log(err.message)})
    }
   
  } 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
    },
 };
  
 
  return (
    <div>
       {userPlug && userPlug.length === 0  ? 
       <div className='my-6 px-6'>
        <h3 className='text-xl font-semibold py-5 text-center'>Plug all your profiles and share with one link</h3>
       <div className='flex justify-center'>
         <button className='bg-sec bg-opacity-50 p-3 rounded-md text-white' onClick={handleButton}>click here to start</button>
       </div>

       <div className='my-5'>
          <h1 className='text-3xl font-bold text-center py-4 text-pry'>Link all your Profiles</h1>
        <Lottie options={defaultOptions} height={300} width={300} />
          <p className='text-lg text-center px-4 py-5 text-sec'>
            Put all your profile (social media, music, blog-articles) togther and share with one single link
            <br /><Link to='/create' className='text-pry text-lg'>Start Now </Link>
            </p>
            
        </div>
         </div> : 
         <div>
            {userPlug && userPlug.map((details) => (
                <div key={uuidv4()} className=' mx-6 py-3'>
               
                <h1 className='text-center font-name text-sec'>@{details.displayName}</h1>
                {details && details.userLinks.map((pair) => (
                  <div key={uuidv4()} className='flex justify-center'>
                    <div className='border-2 my-6 grid bg-blue-gray-50 bg-opacity-70 justify-items-center w-64 px-9 shadow-lg rounded-lg'>
                      <div className='w-44 px-3 py-1 bg-pry text-white rounded-tl-lg truncate rounded-br-lg text-center my-5'>{pair.urls}</div>
                      <div className='border px-3 rounded-tr-lg rounded-bl-lg bg-cool text-black bg-opacity-50 w-fit py-1 my-5 text-center'>{pair.label}</div>
                    </div>
               
                  </div>
                ))}
                <div className='flex justify-center'>
                  <button className='bg-white border-2 border-pry bg-opacity-75 w-36 h-10 text-sec rounded-2xl' onClick={handleDelete}>delete</button>
                </div>
                 <div className='mt-6'>
                 <h5 className='text-center'>Share you Link below</h5>
                
                 <CopyToClipboard
                  text={`https://linkplug.onrender.com/${details.displayName}`}
                  onCopy={() => alert("Copied")} className='text-pry text-center hover:text-sec'>
                    <p className='text-lg'>
                      https://linkplug.onrender.com/{details.displayName}
                    </p>
                 </CopyToClipboard>
                <div className='flex justify-center pt-3'> <p className='text-sm text-gray-400'>Click on the link to copy </p> <ClipboardCopyIcon className='w-5'/></div>
                 </div>
               
                  </div>
              ))}
          </div>}
          
    </div> 
  )
}
