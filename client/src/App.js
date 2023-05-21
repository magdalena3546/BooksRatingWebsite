import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Footer from "./components/views/Footer/Footer";
import "./styles/global.scss";
import Login from "./components/pages/Login/Login";
import { useEffect, useState } from "react";
import Navbar from "./components/views/Navbar/Navbar";
import Main from "./components/pages/Main/Main";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <div>
      {user && <Navbar user={user} />}
      <Routes>
        {user ? (
          <Route path="/" element={<Main />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
