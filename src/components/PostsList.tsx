import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export interface Post{
    userId: number
    id: number
    title: string
    body: string
}


function PostsList(){
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data: Post[] = await response.json()
                setPosts(data)
            } catch(error){
                console.log("Ошибка с данными:", error)
            } finally{
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    if (loading){
        return(
            <div>
                <h1>Загрузка...</h1>
            </div>
        )
    }

    return(
        <div>
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default PostsList