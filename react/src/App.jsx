import { Routes, Route } from "react-router-dom";
import Userinput from "./components/Userinput.jsx";
import './App.css';
import Landingpage from './components/Landingpage.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <Routes>
      {/* This is the default route shown when user opens the site */}
      <Route path="/" element={<Landingpage />} />

      {/* This is the login route */}
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Userinput />} />
    </Routes>
  );
}

export default App;
