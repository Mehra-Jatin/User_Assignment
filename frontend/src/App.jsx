
import React from "react"
import {BrowserRouter as Router ,Route,Routes,Navigate} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import DashBoard from "./pages/DashBoard"
import Bulk from "./pages/Bulk"
import Update from "./pages/Update"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/all" element={<Bulk/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
