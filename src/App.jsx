// React Imports
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
// Component Imports
import SideNav from "./components/SideNav";
import Login from "./components/Login/";
// Page Imports
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Library from "./pages/Library/Library";
import Profile from "./pages/Profile/Profile";

export const TokenContext = createContext();

const App = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  // mounted to grab/set access token
  useEffect(() => {
    const hash = window.location.hash;
    let accessToken = localStorage.getItem("token");
    if (!accessToken && hash) {
      accessToken = hash
        .substring(1)
        .split("&")[0]
        .replace("access_token=", "");
      localStorage.setItem("token", accessToken);
    }
    setToken(accessToken);
  }, []);
  function login() {
    window.location.replace(
      `${import.meta.env.VITE_AUTH_ENDPOINT}?client_id=${
        import.meta.env.VITE_SPOTIFY_CLIENT_ID
      }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=${
        import.meta.env.VITE_RESPONSE_TYPE
      }`
    );
  }
  function logout() {
    setToken("");
    localStorage.clear();
    navigate("/");
  }

  return (
    <TokenContext.Provider value={token}>
      <div className="fixed z-[100] h-full w-[180px] bg-black">
        <SideNav login={login} logout={logout} />
      </div>
      <div className="ml-auto h-full w-[calc(100%-180px)]">
        <Routes>
          <Route
            path="/"
            element={token ? <Home login={login} /> : <Login login={login} />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </TokenContext.Provider>
  );
};

export default App;
