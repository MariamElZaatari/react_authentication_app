import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LandPage from "./pages/LandPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>

      <NavBar />
      
      <Routes>
        <Route path='/landPage' element={<LandPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
