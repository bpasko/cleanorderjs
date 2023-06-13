import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import classes from '../styles/addMeal.module.css'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'
import axios from 'axios'
import app from '../firebase'

const AddMeal = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState('dom')
    const [price, setPrice] = useState(50)
    const [photo, setPhoto] = useState("")
    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if (session.status === 'loading') return

        if (session.status !== 'authenticated') {
            signIn()
        }
    }, [session.status])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const storage = getStorage(app)
        const filename = crypto.randomUUID() + photo.name
        const storageRef = ref(storage, filename)
        const uploadFile = uploadBytesResumable(storageRef, photo)

        uploadFile.on("state_changed",
            (snapshot) => {
                switch (snapshot.state) {
                    case 'paused':
                        console.log('upload is paused now')
                        break
                    case 'running':
                        console.log('upload is paused now')
                        break
                    default:
                        break
                }
            },
            (error) => {
                console.log(error)
            },
            async() => {
                const fileUrl = await getDownloadURL(uploadFile.snapshot.ref)
                postMeal(fileUrl)
            }
        )
    }

    const postMeal = async(imageUrl) => {
        try {
            const {data} = await axios.post('http://localhost:3000/api/meal', {title, desc, category, price, image: imageUrl})
            router.push(`/meal/${data?._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <h2>Dodawanie usług</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Usługa...' onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" placeholder='Opis...' onChange={(e) => setDesc(e.target.value)} />
                        <select onChange={(e) => setCategory(e.target.value)}>
                            <option disabled>Select Category</option>
                            {/* <option value="dom">Sprzątanie domu</option> */}
                            <option value="mieszkanie">Sprzątanie mieszkania</option>
                            <option value="biuro">Sprzątanie biura</option>
                            <option value="remont">Sprzątanie po remoncie</option>
                            <option value="wynajem">Sprzątanie po wynajmie</option>
                            <option value="dodatkowe">Usługi dodatkowe</option>
                        </select>
                        <input type="number" placeholder='Cena...' onChange={(e) => setPrice(e.target.value)} />
                        <div className={classes.imageField}>
                            <label htmlFor='image'>
                                Zdjęcie <AiOutlineFileImage size={25} />
                            </label>
                            <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setPhoto(e.target.files[0])} />
                        </div>
                        <button>Dodaj</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddMeal