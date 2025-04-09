import React from "react";
import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import News from "./components/file/News";
import About from './components/file/About';
import Books from "./components/file/Books";
import Notfound from "./components/Notfound";
import Contect from "./components/file/Contect";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <div>
                <main>
                     <Routes>
                           <Route path="/" element={<Layout><Home/></Layout>} />
                           <Route path="/about" element={<Layout><About/></Layout>} />
                           <Route path="/books" element={<Layout><Books/></Layout>} />
                           <Route path="/news" element={<Layout><News/></Layout>} />
                           <Route path="/contect" element={<Layout><Contect/></Layout>} />
                           <Route path="/admin" element={<Admin/>} />
                           <Route path="/dashboard/login" element={<Login/>} />
                           <Route path="*" element={<Notfound/>} />
                     </Routes>
                </main>
    </div>
  )
}

export default App;

