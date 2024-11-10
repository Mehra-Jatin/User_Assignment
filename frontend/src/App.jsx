
import React from "react"
import {BrowserRouter as Router ,Route,Routes,Navigate} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import DashBoard from "./pages/DashBoard"
import Bulk from "./pages/Bulk"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/all" element={<Bulk/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
