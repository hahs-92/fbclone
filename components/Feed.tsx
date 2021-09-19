import type  { NextPage } from 'next'
//components
import Stories from "./Stories"
import InputBox from "./InputBox"
import Posts from "./Posts"

type FeedProps = {
    posts: Post[]
}

const Feed: NextPage<FeedProps> = ({posts}) => {
    return(
        <section className='flex-grow mr-4 h-screen pb-44 pt-6 xl:mr-40 overflow-y-auto scrollbar-hide'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <Stories />
                <InputBox />
                <Posts posts={ posts }/>
            </div>
        </section>
    )
}

export default Feed