import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from "./pages/Feed";
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar/>
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/' element={<LandingPage /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
