import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Loader } from "./components/common/Loader";
import { Feedback } from "./pages/Feedback";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading, replace with real loading logic if needed
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feed-back" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
