import { Button } from "@/components/ui/button"
import React from "react"
import {BrowserRouter as Router ,Route,Routes,Navigate} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
