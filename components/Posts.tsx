//firebase-hooks
import {useCollection } from 'react-firebase-hooks/firestore'
//firebase
import { db } from '../firebase'
//components
import Post from './Post'

const Posts = () => {
    const [realtimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    )

    return(
        <section>
            { realtimePosts?.docs.map(post => (
                <Post 
                    key={post.id}
                    name={ post.data().name }
                    message={post.data().message}
                    email={ post.data().email }
                    timestamp={ post.data().timestamp }
                    image={ post.data().image }
                    postImage={ post.data().postImage}
                />
            ))}
        </section>
    )
}

export default Posts