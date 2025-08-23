import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { ProgressLoader } from "./components/common/ProgressLoader";
import { Feedback } from "./pages/Feedback";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { useImageLoader } from "./utils/useImageLoader";
import { getRouteImages } from "./utils/imagePreloader";

function AppContent() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const [routeChanged, setRouteChanged] = useState(false);
  
  // Get images for current route
  const routeImages = getRouteImages(currentRoute);
  
  // Use the image loader hook with route-specific images
  const { isLoading, progress, loadedCount, totalCount } = useImageLoader({
    imageUrls: routeImages,
    minLoadingTime: 800,
    maxLoadingTime: 10000,
  });

  useEffect(() => {
    if (location.pathname !== currentRoute) {
      setCurrentRoute(location.pathname);
      setRouteChanged(true);
      
      // Reset route changed flag after a short delay
      const timer = setTimeout(() => setRouteChanged(false), 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, currentRoute]);

  // Show loader during initial load or route changes with many images
  const shouldShowLoader = isLoading || (routeChanged && totalCount > 20);

  if (shouldShowLoader) {
    return (
      <ProgressLoader
        progress={progress}
        loadedCount={loadedCount}
        totalCount={totalCount}
        showProgress={totalCount > 0}
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/feed-back" element={<Feedback />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
