
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./home";
import About from "./about";
import Blog from "./Blog";

import "./task15.css";

function Task15() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <h2>My Website</h2>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default Task15;
