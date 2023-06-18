import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react';
import classes from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const session = useSession()

  

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link href='/' className={classes.left}>
          <h2>CLEANING APP</h2>
          <h3>let us handle this for you...</h3>
        </Link>
        {/* <div className={classes.center}>
          <div className={classes.listItem} ><FontAwesomeIcon icon={faList} />OFERTA</div>
          <div className={classes.listItem} ><FontAwesomeIcon icon={faFaceSmile} /> O NAS</div>
          <div className={classes.listItem} ><FontAwesomeIcon icon={faPhone} />KONTAKT</div>
          </div>  */}
        <div className={classes.right}>
          {session.status !== 'authenticated'
            ? (
              <>
                
                <button onClick={() => signIn()} className={classes.signIn}>LOGOWANIE</button>
              </>
            )
            : <>
              <button className={classes.logout} onClick={() => signOut()}>WYLOGUJ
              </button>
              <Link className={classes.addMeal} href='/addMeal'>
                DODAJ
              </Link>
            </>
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar