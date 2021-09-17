import type { NextPage } from 'next'
import Image from 'next/image'
//icons
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

type PostProps = {
    name: string,
    message: string,
    email: string,
    timestamp: string | any ,
    image: string,
    postImage: string
}

const Post: NextPage<PostProps> = ({
    email,image,message,name,postImage,timestamp
}) => {
    return(
        <article className='flex flex-col'>
            <div className='mt-5 p-5 bg-white rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <img 
                        className='rounded-full'
                        src={image} 
                        alt="post" 
                        width={40}
                        height={40}
                    />
                    <div>
                        <p className='font-medium'>{name}</p>
                        <p className='text-xs text-gray-400'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
                </div>

                <p className='pt-4'>{message}</p>

            </div>

            { postImage && (
                <div className='relative h-56 md:h-96 bg-white'>
                    <Image 
                        src={postImage}
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
            )}

            {/* footer of pots */}
            <section className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-b-2xl'>
                    <ThumbUpIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>

                <div className='inputIcon rounded-none'>
                    <ChatAltIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>

                <div className='inputIcon rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </section>
        </article>
    )
}
export default Post
