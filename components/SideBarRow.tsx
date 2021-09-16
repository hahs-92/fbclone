import type { NextPage } from 'next'
import Image from 'next/image'

type SideBarProps = {
    title: string,
    src?: string,
    Icon?: HeroIcon 
}

const SideBarRow: NextPage<SideBarProps> = ({Icon, src,title}) => {
    return(
        <section className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
            {
                src && (
                    <Image 
                        className='rounded-full'
                        src={ src }
                        width={30}
                        height={30}
                        layout='fixed'
                    />
                )
            }
            {
                Icon && 
                    <Icon className='h-8 w-8 text-blue-500'/>
                    
            }
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </section>
    )
}

export default SideBarRow