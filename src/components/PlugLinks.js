import {useEffect, useState} from 'react'
import { AuthHook } from '../hooks/authHooks'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { URL } from '../App'

export default function PlugLinks() {
  const {displayNames} = useParams()
  const { user } = AuthHook()
  const [pluglink, setpluglink] = useState('')
  

  useEffect(() => {
    const getlinks = async () => {
      
        axios.get(`${URL}/api/routes/${displayNames}`).then((res) => {
          setpluglink(res.data)
        }).catch((err) => {
          console.log(err) 
        })
           
       
    } 
    
      getlinks()
    
   
  }, [] )
  return (
    <div className=' bg-opacity-80 h-screen px-6'>

      <div className='bg-gray-800 h-20 w-20 mt-10 mx-36 rounded-full flex justify-center '>
       <h2 className='text-white text-center text-4xl pt-5'>
         {pluglink.displayName && pluglink.displayName.charAt(0).toUpperCase()}
         </h2>
      </div>
      
        <h4 className='my-2 pt-5 text-center font-name font-bold text-lg'>@{pluglink && pluglink.displayName}</h4>
        {pluglink && pluglink.userLinks.map((userlink) => (
          <div className='grid place-items-center' key={uuidv4()}>
           <div className='my-7 list-none bg-black bg-opacity-20 p-3 px-16 rounded-xl '> <a className=' text-black' href={userlink.urls}>
              {userlink.label}
              </a></div> 
            
          </div>
        ))}

        <div className='pt-5'>
        <p className='text-center text-black'> create your<Link className='text-sec ' to='/'> link plug 
</Link></p>
        </div>
    </div>
  )
}
