
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Header from './Components/Header';
export default function App() {
  return (
 < BrowserRouter>
 {/* HEADER */}
 <Header />
 <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/profile" element={<Profile />}/>
  <Route path="/signin" element={<Signin />}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/about" element={<About />}/>
 </Routes>
 </BrowserRouter>
  )
}
