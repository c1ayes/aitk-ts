import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type {Post} from "./PostsList.tsx"
import type{ PostCommentForm } from "../types/PostCommentType.tsx";

function PostDetail({comments}: {comments:PostCommentForm[]}){
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
            <h1 className="flex justify-center text-2xl font-bold">{post.title}</h1>
            <p className="m-1">{post.body}</p>
            <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
                <button onClick={() => (navigate(`/posts/${Number(id)-1}`))} disabled={Number(id) <= 1} className="hover:bg-indigo-500 disabled:text-black disabled:bg-gray-600 bg-green-700 rounded-2xl p-2 cursor-pointer">Назад</button>
                <button onClick={() => (navigate(`/posts/${Number(id)+1}`))} disabled={Number(id) >= 100} className="hover:bg-indigo-500 disabled:text-black disabled:bg-gray-600 bg-green-700 rounded-2xl p-2 cursor-pointer">Вперед</button>
            </div>
            <div className="flex justify-center m-2">
                <Link to={`/posts/comment/${id}`} className="rounded-2xl bg-pink-500 text-xl p-2 hover:bg-fuchsia-900">Оставить комментарий под этим постом</Link>
            </div>
            <div>
                <ol>
                    {comments.map(comment => 
                        comment.postId === Number(id) ? 
                        <li className="flex flex-col border">
                            <span className="font-bold">Коментарий: {comment.comment}</span>
                            <span className="font-light">Автор: {comment.name}</span>
                            <span className="font-light">Почта: {comment.email}</span> 
                        </li>: null
                    )}
                </ol>
            </div>

            <Link to={"/"}><button className="m-2 p-2 bg-amber-400 rounded-2xl hover:bg-indigo-500 cursor-pointer">Вернуться на главное</button></Link>
        </div>
    )
}

export default PostDetail