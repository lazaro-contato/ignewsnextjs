import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import {useState} from "react";

const SignInButton = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  return (
    <>
      {isUserLoggedIn ? (
        <button type='button' className={styles.signInButton}>
          <FaGithub color='#04d361'/>
          José Lázaro
          <FiX color='#737380' className={styles.closeIcon}/>
        </button>
      ) : (
        <button type='button' className={styles.signInButton}>
          <FaGithub color='#EBA417'/>
          Sign in with GitHub
        </button>
      )}
  </>


  )
}

export default SignInButton