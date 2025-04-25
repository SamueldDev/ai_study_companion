
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import SignUp from './pages/SignUp'
import PrivateRoute from './route/PrivateRoute'
import FlashCardReviews from './pages/FlashCardReviews'
import NewTopic from './pages/NewTopic'
import StudyMaterial from './pages/StudyMaterial'
import MyTopic from './pages/MyTopic'
import Navbar from './components/Navbar'



function App() {
  

  return (
    <>
       <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

            {/* protected route */}

            <Route
              path='/dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            
            <Route
              path='/flashcards'
              element={
                <PrivateRoute>
                  <FlashCardReviews />
                </PrivateRoute>
              }
            />

            <Route
              path='/new-topics'
              element={
                <PrivateRoute>
                  <NewTopic />
                </PrivateRoute>
              }
            />

            <Route
              path='/study-material'
              element={
                <PrivateRoute>
                  <StudyMaterial />
                </PrivateRoute>
              }
            />

            <Route
              path='/my-topics'
              element={
                <PrivateRoute>
                  <MyTopic />
                </PrivateRoute>
              }
            />


          </Routes>


       </BrowserRouter>

    </>
  )
}

export default App
