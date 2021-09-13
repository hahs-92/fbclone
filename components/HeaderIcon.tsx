import type { NextPage} from 'next'


type HeaderIconProps = {
    Icon: HeroIcon,
    active?: boolean
}

const HeaderIcon: NextPage<HeaderIconProps> = ({Icon, active}) => {
    return(
        <div className='flex items-center cursor-pointer text-gray-500 sm:h-14 md:px-5 lg:px-10 hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group'>
            <Icon className={`h-5 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active && "text-blue-500"}`} />
        </div>

    )
}

export default HeaderIcon