import { useEffect, useState } from 'react';

interface UseImageLoaderOptions {
  /**
   * Optional array of specific image URLs to track.
   * If not provided, will track all images in the document.
   */
  imageUrls?: string[];
  /**
   * Minimum loading time to show loader (prevents flash for fast loads)
   */
  minLoadingTime?: number;
  /**
   * Maximum loading time before forcing completion (timeout)
   */
  maxLoadingTime?: number;
}

interface UseImageLoaderReturn {
  /**
   * Whether images are still loading
   */
  isLoading: boolean;
  /**
   * Number of images loaded
   */
  loadedCount: number;
  /**
   * Total number of images being tracked
   */
  totalCount: number;
  /**
   * Loading progress (0-100)
   */
  progress: number;
}

export const useImageLoader = ({
  imageUrls,
  minLoadingTime = 1000,
  maxLoadingTime = 15000,
}: UseImageLoaderOptions = {}): UseImageLoaderReturn => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      // If no specific images provided, use minimal loading
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsed);
      setTimeout(() => setIsLoading(false), remainingTime);
      return;
    }

    let loadedImages = 0;
    const totalImages = imageUrls.length;
    setTotalCount(totalImages);

    // Timeout to force completion
    const maxTimeout = setTimeout(() => {
      setIsLoading(false);
    }, maxLoadingTime);

    const handleImageLoad = () => {
      loadedImages++;
      setLoadedCount(loadedImages);

      // Check if all images are loaded and minimum time has passed
      if (loadedImages === totalImages) {
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsed);

        setTimeout(() => {
          clearTimeout(maxTimeout);
          setIsLoading(false);
        }, remainingTime);
      }
    };

    const handleImageError = () => {
      // Count errored images as "loaded" to prevent infinite loading
      console.warn('Image failed to load, but continuing...');
      handleImageLoad();
    };

    // Create image elements and start loading
    const imageElements = imageUrls.map((url) => {
      const img = new Image();
      
      // Set up event listeners before setting src
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
      
      // Start loading
      img.src = url;
      
      // If image is already cached, it might be complete immediately
      if (img.complete) {
        setTimeout(handleImageLoad, 0);
      }
      
      return img;
    });

    // Cleanup function
    return () => {
      clearTimeout(maxTimeout);
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls, minLoadingTime, maxLoadingTime, startTime]);

  const progress = totalCount > 0 ? Math.round((loadedCount / totalCount) * 100) : 100;

  return {
    isLoading,
    loadedCount,
    totalCount,
    progress,
  };
};
