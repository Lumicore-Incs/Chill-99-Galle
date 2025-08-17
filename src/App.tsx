import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
