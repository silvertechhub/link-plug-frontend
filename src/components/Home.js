import {Link, useNavigate} from 'react-router-dom';
import { AuthHook } from '../hooks/authHooks'
import Lottie from "react-lottie"
import animation from '../loader.json'
import trackLottie from '../track.json'
import globeLottie from '../globe.json'
import tiktokLottie from '../tiktok.json'


export default function Home() {
    const navigate = useNavigate();
    const {user} = AuthHook()
      
    const handleButton = () => {
      if(user){
        navigate('/uniquelink')
      }else{
        navigate('/login');
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
    const track = {
      loop: true,
      autoplay: true,
      animationData: trackLottie,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
      },
   };
    const tiktok = {
      loop: true,
      autoplay: true,
      animationData: tiktokLottie,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
      },
   };
    const globe = {
      loop: true,
      autoplay: true,
      animationData:globeLottie,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
      },
   };
 
  return (
    <div className=' px-5 lg:px-16'>
      <div className='mt-10'>
        <div className=' lg:grid h-screen grid-cols-2 gap-2 lg:mt-20'>
          <div>
            <h1 className=' text-5xl lg:text-7xl text-sec text-center lg:px-10 font-bold py-7 '>Let the world find you with one link</h1>
            <p className='text-center text-xl text-pry font-semibold py-7'>Plug all your profile links and share your unique link </p>
            <div className='flex justify-center'>
             
              <button className='bg-sec w-40 h-10 text-white rounded-2xl' onClick={handleButton}>Get Started</button>
            </div>
          </div>
          <div className=''>
          <Lottie options={globe} height={300} width={300} />
          </div>
        </div> 
        <div className='my-5 lg:grid grid-cols-2 gap-2'>
          <div>
            <h1 className='text-3xl font-bold text-center py-4 text-pry'>Link all your Profiles</h1>
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
          <div>
            <p className='text-lg lg:text-3xl lg:bg-blue-gray-50 lg:h-full lg:pt-28 lg:px-20 text-center px-4 py-5 text-sec'>
              Put all your profile (social media, music, blog-articles) togther and share with one single link
              <br /><Link to='/signup' className='text-pry text-lg'>Start Now &gt; </Link>
            </p>
          </div>
        
            
        </div>
        <div className='my-5 lg:my-16 lg:grid grid-cols-2 gap-2'>
          <div className='lg:bg-stone-200'>
            <p className='text-lg text-center  lg:h-full lg:pt-28 lg:px-20 px-4 py-5 text-sec'>
             Get anayltics and data of the number of people that are clicking on your link
              <br /><Link to='/signup' className='text-pry text-lg'>Learn more &gt; </Link>
            </p>
          </div>
          <div>
            <h1 className='text-3xl font-bold text-center text-pry'>Check who's looking</h1>
            <Lottie options={track} height={300} width={300} />
          </div>
         
          
        </div>
        <div className='my-5 lg:grid grid-cols-2 gap-2'>
          <div>
            <h1 className='text-3xl font-bold text-center text-pry'>Link Your TikTok</h1>
            <Lottie options={tiktok} height={300} width={300} />
          </div>
          <div>
            <p className='text-lg text-center lg:text-3xl lg:bg-blue-gray-50 lg:h-full lg:pt-28 lg:px-20 px-4 py-5 text-sec'>
             Add your tiktok profile to your Link plug directly from the Tiktok app. 
              <br /><Link to='/signup' className='text-pry text-lg'>Sign up &gt; </Link>
            </p>
          </div>
         
        </div>
        </div>
    </div>
  )
}
