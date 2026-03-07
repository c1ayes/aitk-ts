import { useState } from "react"
import type { PostCommentForm, PostCommentErrors, PostCommentProps} from "../types/PostCommentType"
import { Link, useNavigate, useParams } from "react-router-dom"

function PostComment({setComments}: PostCommentProps){
    const {postid} = useParams<{postid:string}>()
    const [postform, setPostform] = useState<PostCommentForm>({name: '', email: '', comment:'', postId:Number(postid)})
    const [errors, setErrors] = useState<PostCommentErrors>()
    const navigate = useNavigate()

    const validate = (data: PostCommentForm): PostCommentErrors => {
        const newErrors: PostCommentErrors = {}
        if (!data.name.trim()){
            newErrors.name = "Имя обязательно!!"
        }

        if (!data.email.trim()){
            newErrors.email = "Email обязателен!!"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
            newErrors.email = "Некорректно введенный email"
        }

        if(!data.comment.trim()){
            newErrors.comment = "комментарий обязателен!!"
        }

        return newErrors

    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setPostform(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newErrors = validate(postform)
        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0){
            return
        }
        setComments(prev => ([...prev, postform]))
        setPostform(prev => ({...prev, name: '', email: '', comment:''}))
        navigate(`/posts/${postid}`)
  
    }



    return(
        <div className="flex justify-center items-center h-screen flex-col">
            <form action="" onSubmit={handleSubmit} noValidate className="flex flex-col m-2 shadow-2xl justify-center items-center w-[500px] rounded-2xl h-[250px] gap-4">
                <div>
                    <label htmlFor="name" className="text-xl m-1">Имя:</label>
                    <input className="border rounded-xl px-2" type="text" name="name" id="name" value={postform.name} onChange={handleChange} aria-required='true' aria-invalid={!!errors?.name} aria-describedby={errors?.name ? 'name-error' : undefined} autoComplete="name"/>
                    {errors?.name && <span className="ml-2 text-red-700" id="name-error">{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor="email" className="text-xl m-1">Почта:</label>
                    <input className="border rounded-xl px-2" type="email" name="email" id="email" value={postform.email} onChange={handleChange} aria-required='true' aria-invalid={!!errors?.email} aria-describedby={errors?.email ? 'email-error' : undefined} autoComplete="email"/>
                    {errors?.email && <span className="ml-1 text-red-700" id="email-error">{errors.email}</span>}
                </div>

                <div className="flex items-center">
                    <label htmlFor="comment" className="text-xl">Коментарий:</label>
                    <textarea className="border rounded-xl px-2 max-h-[75px]" name="comment" id="comment" value={postform.comment} onChange={handleChange} aria-required='true' aria-invalid={!!errors?.comment} aria-describedby={errors?.comment ? 'comment-error' : undefined} autoComplete="off"></textarea>
                    {errors?.comment && <span className="ml-2 text-red-700" id="comment-error">{errors.comment}</span>}
                </div>

                <button type="submit" className="bg-green-700 rounded-2xl text-xl p-2 cursor-pointer">Отправить</button>
            </form>
            <button className="m-2 p-2 bg-amber-400 rounded-2xl hover:bg-indigo-500 cursor-pointer" onClick={() => navigate(-1)}>Вернуться назад</button>
        </div>
    )    
}

export default PostComment