import React, { useState } from 'react'
import classes from '../styles/login.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await signIn('credentials', {
                username,
                password,
                redirect: false
            })

          
            if (res?.error === null) {
                router.push('/')
            }
            // 1000ms -> 1 second
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className={classes.container}>s
                <div className={classes.wrapper}>
                <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Nazwa użytkownika' onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='Hasło' onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>ZALOGUJ</button>
                    </form>
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </>
    )
}

export default Login