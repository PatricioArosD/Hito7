import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const Profile = () => {
  const{
    token,
    user
  } = useContext(UserContext) 
  return (
    
    <div>
      {token ? (
              <>
                <h2>Bienvenido</h2>
              </>
            ) : (
              <>
                <h2>placeholder</h2>
              </>
            )}
    </div>
  )
}

export default Profile