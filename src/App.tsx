import './App.css'
import NotFound from './components/NotFound.tsx'
import BurgersLanding from './components/BurgersLanding.tsx'
import Registration from './components/Registration.tsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<BurgersLanding/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/registration" element={<Registration/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
