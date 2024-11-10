import { Button } from "@/components/ui/button"
import React from "react"
import {BrowserRouter as Router ,Route,Routes,Navigate} from 'react-router-dom'
import SignUp from "./pages/SignUp"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
