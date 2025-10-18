import "./App.css";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Home />
      <SocialLinks />
      <Footer />
      <ToastContainer  autoClose={2500}/>
    </>
  );
}

export default App;
