import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './assets/css/app.css';
import ProtectedRoutes from "./components/ProtectedRoutes";


export default function App() {
  return (

    // The App has a NavBar component along with Different Routes for different pages components
    <Router>

      <NavBar />
      
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* Dashboard is a protected route since user needs to be authenticated */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}
