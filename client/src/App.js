import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Footer from "./components/views/Footer/Footer";
import "./styles/global.scss";
import Login from "./components/pages/Login/Login";
import { useEffect, useState } from "react";
import Navbar from "./components/views/Navbar/Navbar";
import Main from "./components/pages/Main/Main";
import UsersBooks from "./components/pages/UsersBooks/UsersBooks";
import { API_URL } from "./config";

const App = () => {
  const [user, setUser] = useState(null);
  const [userRate, setUserRate] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch(`${API_URL}/auth/login/success`, {
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
          setUserRate(resObject.user.stars);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div>
      {user && <Navbar user={user} />}
      <Routes>
        {user ? (
          <Route
            path="/"
            element={<Main userId={user._id} userRate={userRate} />}
          />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/login" element={<Login />} />
        {user && (
          <Route
            path="/mybooks"
            element={<UsersBooks userId={user._id} userRate={userRate} />}
          />
        )}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
