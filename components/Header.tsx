import Image from 'next/image'
//auth
import { signOut, useSession } from 'next-auth/client'

import  {
    BellIcon,
    ChatAltIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from '@heroicons/react/solid'
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
 } from '@heroicons/react/outline' 

 //componentes
 import HeaderIcon from './HeaderIcon'

const Header = () => {
    const [session ] = useSession()

    return(
        <header className='sticky top-0 z-50 flex items-center shadow-md p-2 lg:px-5 bg-white'>
            <section className='flex items-center'>
                <Image  
                    src='https://links.papareact.com/5me'
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <div className=' hidden ml-2 p-2 sm:flex w-48 rounded-full bg-gray-100 '>
                    <SearchIcon className='h-6 text-gray-600'/>

                    <input className='hidden md:inline-flex items-center flex-shrink ml-2 bg-transparent outline-none' type="text" placeholder='Search Facebook' />
                </div>
            </section>

            <section className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </section>

            <section className='flex items-center sm:space-x-2 justify-end w-16 md:w-36 xl:w-auto'>
                <Image 
                    src={session?.user?.image as string}
                    onClick={() => signOut()}
                    className='rounded-full cursor-pointer'
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <p className='hidden md:block truncate pr-3 whitespace-nowrap font-semibold'>
                    { session?.user?.name }
                </p>

                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </section>
        </header>
    )
}

export default Header