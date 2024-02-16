import { Route, BrowserRouter, Routes} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/editor/:roomId' element = {<EditorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App