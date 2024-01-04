//ลง axios
//import axios
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<BlogPage />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
