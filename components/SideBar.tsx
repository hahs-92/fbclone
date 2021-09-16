import { useSession } from "next-auth/client"
import {
    ChevronDownIcon,
    ShoppingCartIcon,
    UserGroupIcon
} from '@heroicons/react/outline'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from '@heroicons/react/solid'
//components
import SideBarRow from "./SideBarRow"

const SideBar = () => {
    const [session ] = useSession()
    return(
        <aside className='mt-5 p-2 max-w-xl xl:min-w-[300]'>
            <SideBarRow src={session?.user?.image as string} title={session?.user?.name as string}/>
            <SideBarRow Icon={UsersIcon} title='Friends'/>
            <SideBarRow Icon={UserGroupIcon} title='Groups'/>
            <SideBarRow Icon={ShoppingCartIcon} title='Marketplace'/>
            <SideBarRow Icon={DesktopComputerIcon} title='Watch'/>
            <SideBarRow Icon={CalendarIcon} title='Events'/>
            <SideBarRow Icon={ClockIcon} title='Memories'/>
            <SideBarRow Icon={ChevronDownIcon} title='See More'/>
        </aside>
    )
}

export default SideBar 
