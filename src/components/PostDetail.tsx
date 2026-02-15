import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type {Post} from "./PostsList.tsx"


function PostDetail(){
    const {id} = useParams<{id:string}>()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    const [post, setPost] = useState<Post | null>(null)
    const [error, setError] = useState<string | null>(null)
    
    useEffect(() => {
        setLoading(true)
        setError(null)
        const fetchPost = async () =>{
            try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if (!response.ok){
                navigate("/404", {replace:true})
                return
            }
            const data = await response.json()
            setPost(data)
            } catch(error:any){
                console.error(error)
                setError(error.message || "Ошибка")
            } finally{
                setLoading(false)
            }
        }
        fetchPost()
    }, [id])

    if (loading){
        return(
            <div>
                <h1>Загрузка</h1>
            </div>
        )
    }

    if (error){
        return(
            <h1 style={{color:"red"}}>
                {error}
            </h1>
        )
    }

    if (!post){
        return(
            <div>
                <h1>Пост не найден!</h1>
            </div>
        )
    }
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
                <button onClick={() => (navigate(`/posts/${Number(id)-1}`))} disabled={Number(id) <= 1}>Назад</button>
                <button onClick={() => (navigate(`/posts/${Number(id)+1}`))} disabled={Number(id) >= 100}>Вперед</button>
            </div>
            <Link to={"/"}><button style={{marginTop:"20px"}}>Вернуться на главное</button></Link>
        </div>
    )
}

export default PostDetail