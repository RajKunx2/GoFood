import Home from "./screen/Home"
import Login from "./screen/Login"
import SignUp from "./screen/SignUp"
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<SignUp />} />
          </Routes>

        </div>
      </Router>

    </>
  )
}

export default App
