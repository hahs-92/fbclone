import StoryCard from './StoryCard'

type Stories = {    
    name: string,
    src: string,
    profile: string
}

const stories: Stories[] = [
    {
        name: "Sonny Snagha",
        src: 'https://links.papareact.com/zof',
        profile: 'https://links.papareact.com/l4v'
    },
    {
        name: "Elonk Musk",
        src: 'https://links.papareact.com/4zn',
        profile: 'https://links.papareact.com/kxk'
    },
    {
        name: "Jeff Bezoz",
        src: 'https://links.papareact.com/k2j',
        profile: 'https://links.papareact.com/f0p'
    },
    {
        name: "Mark Zuckerberg",
        src: 'https://links.papareact.com/xql',
        profile: 'https://links.papareact.com/snf'
    },
    {
        name: "Bill Gates",
        src: 'https://links.papareact.com/4u4',
        profile: 'https://links.papareact.com/zvy'
    },
]

const Stories = () => {
    return(
        <div className='flex justify-center space-x-3 mx-auto'>
            {
                stories.map(storie => (
                    <StoryCard 
                        key={ storie.name }
                        name={ storie.name }
                        profile={ storie.profile }
                        src={ storie.src }
                    />
                ))
            }
        </div>
    )
}

export default Stories