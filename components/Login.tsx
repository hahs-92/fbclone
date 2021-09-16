//auth
import { signIn } from 'next-auth/client'

const Login = () => {
    return(
        <section className='grid items-center justify-center min-h-screen'>
    
            <button 
            onClick={ () => signIn() }
                className='w-28 h-9 bg-blue-500 text-white text-center rounded-2xl cursor-pointer outline-none'>Log In
            </button>
        </section>
    )
}

export default Login