import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
//icons
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
//friebase
import firebase from 'firebase'
import { db, storage } from '../firebase'


const InputBox = () => {
    const [session] = useSession()
    const  inputRef  = useRef<HTMLInputElement>(null)
    const filepickerRef = useRef<HTMLInputElement>(null)
    const [imageToPost, setImageToPost] = useState<string | null>(null)

    const sendPost = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (!inputRef.current?.value) return

        db.collection('posts').add({
            message: inputRef.current?.value,
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((doc) => {
            if(imageToPost) {
                const uploadTask = storage
                    .ref(`posts/${doc.id}`)
                    .putString(imageToPost, "data_url")
                
                removeImage()

                uploadTask.on("state_change",null, (error) => console.error(error), () => {
                    //when the upload completes
                    storage.ref('posts').child(doc.id).getDownloadURL()
                        .then(url => {
                            db.collection('posts').doc(doc.id).set({
                                postImage: url
                            },{ merge: true})
                        })
                })
            }
        })
    
        inputRef.current.value = ''
    }

    const addImageToPost = (e:React.SyntheticEvent ) => {
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target?.result as string)
        }

    }

    const removeImage = () => {
        setImageToPost(null)
    }

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

                { imageToPost && (
                    <section className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer' onClick={removeImage}>
                        <img className='h-10 object-contain' src={imageToPost} alt="post" />
                        <p className='text-xs text-red-500 text-center'>Remove</p>
                    </section>
                )}
            </div>

            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                     <VideoCameraIcon className='h-7 text-red-500'/>
                     <p className='text-xs sm:text-sm xl:text-base'>LIve Video</p>
                </div>

                <div className='inputIcon' onClick={() => filepickerRef.current?.click()}>
                    <CameraIcon className='h-7 text-green-400'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input
                        ref={ filepickerRef}
                        type="file" 
                        hidden 
                        onChange={addImageToPost} />
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