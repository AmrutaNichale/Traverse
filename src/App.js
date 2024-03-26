import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Treks } from "./components/Pages/Treks";
import { Temple } from "./components/Pages/Temple";
import { Touring } from "./components/Pages/Touring";
import { TableLand } from "./components/Pages/TableLand";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div
          className="pages"
          style={{
            backgroundImage: "url('/images/Background.jpg')",
            backgroundSize: "cover",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/treks" element={<Treks />} />
            <Route path="/temples" element={<Temple />} />
            <Route path="/Table_lands" element={<TableLand />} />
            <Route path="/Touring" element={<Touring />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
