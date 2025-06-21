import "./css/App.css";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
