import { useRef } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
//icons
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
//friebase
import firebase from 'firebase'
import { db } from '../firebase'


const InputBox = () => {
    const [session] = useSession()
    const  inputRef  = useRef<HTMLInputElement>(null)

    const sendPost = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (!inputRef.current?.value) return

        db.collection('post').add({
            message: inputRef.current?.value,
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    
        inputRef.current.value = ''
        console.log('Send')
    }

    console.log(inputRef.current?.value)

    return(
        <section className='mt-6 p-2 bg-white rounded-2xl shadow-md text-gray-500 font-medium'>
            <div className='flex space-x-4 items-center p-4'>
                <Image 
                    className='rounded-full'
                    src={session?.user?.image as string}
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <form className='flex flex-1' onSubmit={ sendPost}>
                    <input 
                        className='flex-grow px-5 focus:outline-none rounded-full h-12 bg-gray-100 ' 
                        ref={inputRef} 
                        type="text" 
                        placeholder={`What's on your mind, ${session?.user?.name}?`} 
                    />
                    {/* <input hidden type="submit" value='Submit' onClick={ sendPost } /> */}
                </form>
            </div>

            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                     <VideoCameraIcon className='h-7 text-red-500'/>
                     <p className='text-xs sm:text-sm xl:text-base'>LIve Video</p>
                </div>

                <div className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                </div>

                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </section>
    )
}

export default InputBox