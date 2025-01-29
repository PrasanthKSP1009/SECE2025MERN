import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./ContextComponents/AuthContext";
import axios from "axios";
var Home = () => {
  const {user} = useContext(AuthContext);
  const [userName, setUsername] = useState();
  axios.defaults.headers.common["Authorization"] = user
  const getUserProfile = async () => {
    await axios.get("https://sece2025mern-ztby.onrender.com/json").then((res) => {
      setUsername(res.data.user)
    });
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div>
      <h2>Welcome to Home Page  {user && userName}</h2>
      <h3>Explore All the concepts in MERN.</h3>
    </div>
  );
};
export default Home;
