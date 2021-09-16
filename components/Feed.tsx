//components
import Stories from "./Stories"

const Feed = () => {
    return(
        <section className='flex-grow mr-4 h-screen pb-44 pt-6 xl:mr-40 overflow-y-auto'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <Stories />
            </div>
        </section>
    )
}

export default Feed