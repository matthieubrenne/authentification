import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

export default function Navbar() {

  const {toggleModals} = useContext(UserContext)

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (err) {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
    }
  }

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to='/' className='navbar-brand'>
        AuthJS
      </Link>

      <div>
        <button 
        onClick={() => toggleModals("signUp")}
        className="btn btn-primary">
          Sign UP
        </button>
        <button 
        onClick={() => toggleModals("signIn")}
        className="btn btn-primary ms-2">
          Sign In
        </button>
        <button 
        onClick={logOut}
        className="btn btn-danger ms-2">
         Logout
        </button>
      </div>
    </nav>
  )
}

