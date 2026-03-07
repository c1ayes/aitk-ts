import './App.css'
import NotFound from './components/NotFound.tsx'
import Registration from './components/Registration.tsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PostsList from './components/PostsList.tsx'
import PostDetail from './components/PostDetail.tsx'
import type { PostCommentForm } from './types/PostCommentType.tsx'
import { useState } from 'react'
import PostComment from './components/PostComment.tsx'

function App() {
  const [comments, setComments] = useState<PostCommentForm[]>([]) 

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<PostsList/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/posts/:id" element={<PostDetail comments={comments}/>}/>
          <Route path='/posts/comment/:postid' element={<PostComment setComments={setComments}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
