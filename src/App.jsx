// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import PostsList from "./pages/PostsList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
