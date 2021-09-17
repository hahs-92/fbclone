import type { NextPage } from 'next'
import Image from 'next/image'

type ContactProps = {
    src: string,
    name: string
}

const Contact: NextPage<ContactProps> = ({name,src}) => {
    return(
        <article className='flex items-center relative space-x-3 mb-2 rounded-xl cursor-pointer hover:bg-gray-200'>
            <Image 
                className='rounded-full'
                src={src}
                width={50}
                height={50}
                layout='fixed'
                objectFit='cover'
            />
            <p>{name}</p>
            <div className='absolute bottom-2 left-7 h-3 w-3 rounded-full bg-green-800'/>
        </article>
    )
}

export default Contact