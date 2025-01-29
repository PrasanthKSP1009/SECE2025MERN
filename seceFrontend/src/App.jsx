import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/FunctionalComponents/Signup";
import UseState from "./components/FunctionalComponents/Hooks/UseState";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import UseEffectApi from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import ReactLifecycleMethods from "./components/classComponents/ReactLifecycleMethods";
import Student from "./components/FunctionalComponents/Hooks/UseContext";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import LazyLoadingWithSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingWithSuspense";
import UseLocalStorage from "./components/FunctionalComponents/Hooks/UseLocalStorage";
import HoC from "./components/FunctionalComponents/HoC/HoC";
import Login from "./components/FunctionalComponents/Login";
import { AuthContext } from "./components/FunctionalComponents/ContextComponents/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />}></Route>
        <Route path="/about" element={user ? <About /> : <Login />}></Route>
        <Route
          path="/gallery"
          element={
            user ? <Gallery page="Gallery" img="SECE Logo" /> : <Login />
          }
        ></Route>
        <Route path="/contact" element={user ? <Contact /> : <Login />}></Route>
        <Route
          path="/react-lifecycle-methods"
          element={user ? <ReactLifecycleMethods /> : <Login />}
        ></Route>
        <Route
          path="/use-state"
          element={user ? <UseState /> : <Login />}
        ></Route>
        <Route
          path="/use-effect"
          element={user ? <UseEffect /> : <Login />}
        ></Route>
        <Route
          path="/use-api"
          element={user ? <UseEffectApi /> : <Login />}
        ></Route>
        <Route path="/use-ref" element={user ? <UseRef /> : <Login />}></Route>
        <Route
          path="/use-memo"
          element={user ? <UseMemo /> : <Login />}
        ></Route>
        <Route
          path="/use-call"
          element={user ? <UseCallback /> : <Login />}
        ></Route>
        <Route
          path="/use-context"
          element={user ? <Student /> : <Login />}
        ></Route>
        <Route path="/memo" element={user ? <Memo /> : <Login />}></Route>
        <Route
          path="/lazy"
          element={user ? <LazyLoadingWithSuspense /> : <Login />}
        ></Route>
        <Route
          path="/use-custom"
          element={user ? <UseLocalStorage /> : <Login />}
        ></Route>
        <Route path="/hoc" element={user ? <HoC /> : <Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
