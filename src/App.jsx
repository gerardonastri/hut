import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import {useSelector} from 'react-redux'
import Admin from "./pages/Admin/Admin";


function App() {
  const [type, setType] = useState("login")
  const user = useSelector(state => state.user)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {!user?.currentUser ? (
          <Route path="/login" element={<Login type={type} setType={setType} />} />
        ) : (
          <Route path="/login" element={<Navigate to="/" replace={true} />} />
        )}
         {user?.currentUser?.isAdmin ? (
          <Route path="/admin" element={<Admin />} />
        ) : (
          <Route path="/admin" element={<Navigate to="/" replace={true} />} />
        )}

      </Routes>
    </Router>
  );
}

export default App;
