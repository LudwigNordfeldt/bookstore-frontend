import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from "./pages/main";
import Categories from "./pages/categories";
import AllCategories from "./pages/allCategories";
import Search from "./pages/search";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link className="link" style={padding} to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Link>

            <Link className="link" style={padding} to="/search">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Search
              </Typography>
            </Link>

            <Link className="link" style={padding} to="/categories">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Categories
              </Typography>
            </Link>

            <Button color="inherit" className='login'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/categories" element={<AllCategories />}></Route>
        <Route path="/categories/:cat" element={<Categories />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
