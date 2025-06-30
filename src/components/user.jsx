import React from 'react'
import { useNavigate, useParams ,userNavigate} from 'react-router-dom';

const User = () => {
    const parms = useParams();
     const navigation = useNavigate();
     console.log(parms.id)

  return (
    <div className='userName'> 
    
    <button onClick={()=>
        navigation("/about")
    }>Click me</button>
    
    </div>
  )
}

export default User;