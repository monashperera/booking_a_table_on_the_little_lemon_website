import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import OderOnline from "./pages/OderOnline";
import PageNotFound from "./pages/PageNotFound";
import LogIn from "./pages/Login";
import SingUp from "./pages/SignUp";
import {Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/oder-online" element={<OderOnline />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/sign-up" element={<SingUp />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
