export interface PostCommentForm{
    name: string
    email: string
    comment: string
    postId: number
}

export interface PostCommentErrors{
    name?: string
    email?: string
    comment?: string
}

export interface PostCommentProps{
    setComments: React.Dispatch<React.SetStateAction<PostCommentForm[]>>
}