import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'


import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route, } from "react-router-dom";
import Detail from "./components/Detail";
import Contact from "./components/Contact";
import News from "./components/News";
import About from "./components/About";
function App() {
  return (
    
    <div>
      
      
      <Navigation />
      <div>
      <Routes>
        <Route path="/" element={<Main />}>

        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
