//para resolver el problema de incompatiblidad de Icons de tailwind con typescript
type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

interface Post {
    id: string,
    name: string,
    message: string,
    image: string,
    postImage?: string,
    email?: string 
    timestamp: string| null
}