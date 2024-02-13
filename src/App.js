import React from "react";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/home';
import About from './components/about';
import Notfound from './components/notfound';
// import ProtectedRoute from './components/protectedRoute';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/login' element={<Login />} />
//         <Route path='/' element={<ProtectedRoute element={Home} />} />
//         <Route path='/about' element={<ProtectedRoute element={About} />} />
//         <Route path='*' element={<Notfound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import Home from "./components/Home";
// import About from "./components/About";
// import Login from "./components/Login";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;




