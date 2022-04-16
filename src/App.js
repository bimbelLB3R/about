import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Todo from "./Todo";
import AboutTeam from "./AboutTeam";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App h-screen   bg-yellow-600 p-4  ">
      <nav className="flex justify-center space-x-4">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="about" element={<About />}>
          <Route path="team" element={<AboutTeam />} />
        </Route>
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}
// cara instal react
// npm install -g create-react-app
// npx create-react-app web-reactku
// jngn diapa-apakan dulu, install tailwind sesuai petunjuk di webnya
// baru jalankan npm start

export default App;
