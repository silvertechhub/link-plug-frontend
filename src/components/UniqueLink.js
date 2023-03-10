import { useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { useLinkcontextHook } from '../hooks/linkcontextHook'
import { AuthHook } from '../hooks/authHooks'

import axios from 'axios';
import Links from './Links';
import { URL } from '../App';

export default function UniqueLink() {

  const navigate = useNavigate();
  const {userPlug, dispatch } = useLinkcontextHook();
  const { user } = AuthHook()
  
  
    
    // const [error, setError] = useState(null)
    

    useEffect(() => { 
    
     const getUserLinks = async () =>{
      axios.get(`${URL}/api/routes/links`, {headers: 
        { 'Authorization': `Bearer ${user.token}`} 
        }).then(res => {
        
          dispatch({type: 'DISPLAY_LINKS', payload:res.data}) 
        })
     } 
     if(user){
      getUserLinks()
     }
    }, [user])

   
    // handle button for navigate to create page 
    const handleButton = () => {
      navigate(`/create`)
    }
  
  return (
    <div className='py-4 '>
      {user &&  <div className='text-center font-rider mt-5 mb-2 text-2xl'> Hi there, <span>{user.username}!</span></div>}
      
       <Links handleButton={handleButton} userPlug={userPlug} />      
        
    </div>
  )
}
