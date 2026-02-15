import './App.css'
import GamesList from './components/GamesList'
import PostDetail from './components/PostDetail.tsx'
import PostsList from './components/PostsList.tsx'
import NotFound from './components/NotFound.tsx'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <nav style={{display:"flex", gap:"30px", justifyContent:"center"}}>
        <Link to={"/"} style={{border: "2px solid #333", borderRadius: "12px", padding:"5px"}}>Посты </Link>
        <Link to={"/games"} style={{border: "2px solid #333", borderRadius: "12px", padding:"5px"}}>Домашка на 14 лекцию</Link>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<PostsList/>}/>
          <Route path='/games' element={<GamesList/>}/>
          <Route path="/posts/:id" element={<PostDetail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
