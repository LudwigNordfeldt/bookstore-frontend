import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import Main from "./pages/main";
import Categories from "./pages/categories";
import AllCategories from "./pages/allCategories";
import Search from "./pages/search";
import BookPage from "./pages/bookPage";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogOut from "./components/logOut";

import UserService from "./services/users"

import LoginDialog from "./components/login"
import RegisterDialog from "./components/register"

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      UserService.setToken(user.token)
    }
  }, [])

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

            {user ? <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{user.username}</Typography> : <LoginDialog onComplete={setUser}></LoginDialog>}
            {user ? <LogOut onComplete={setUser}> </LogOut> : <RegisterDialog></RegisterDialog>}
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/book/:w/:key" element={<BookPage />}></Route>
        <Route path="/categories" element={<AllCategories />}></Route>
        <Route path="/categories/:cat" element={<Categories />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
