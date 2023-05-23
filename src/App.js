import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Categories from "./pages/categories";
import Search from "./pages/search";

const App = () => {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div className="header">
        <Link className="link" style={padding} to="/">
          Home
        </Link>
        <Link className="link" style={padding} to="/search">
          Search
        </Link>
        <Link className="link" style={padding} to="/categories">
          Categories
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
