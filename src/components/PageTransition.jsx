import { useEffect, useRef, useState } from 'react';

// Define page order matching navbar
const pageOrder = ['/', '/events', '/about', '/team', '/schedule', '/sponsors', '/contact'];

export default function PageTransition({ children, locationKey }) {
  const [pages, setPages] = useState([
    { key: locationKey, className: 'page-slide' }
  ]);
  const contentRef = useRef(new Map());
  const prevKeyRef = useRef(locationKey);
  const isAnimatingRef = useRef(false);

  // Always cache the latest content for this route
  contentRef.current.set(locationKey, children);

  useEffect(() => {
    // Skip if same route or already animating
    if (locationKey === prevKeyRef.current || isAnimatingRef.current) {
      return;
    }

    const currentIndex = pageOrder.indexOf(locationKey);
    const prevIndex = pageOrder.indexOf(prevKeyRef.current);
    const direction = currentIndex > prevIndex ? 'right' : 'left';
    
    const exitClass = direction === 'right' ? 'slide-exit-left' : 'slide-exit-right';
    const enterClass = direction === 'right' ? 'slide-enter-right' : 'slide-enter-left';

    isAnimatingRef.current = true;

    // Show both pages with animation classes
    setPages([
      { key: prevKeyRef.current, className: `page-slide ${exitClass}` },
      { key: locationKey, className: `page-slide ${enterClass}` }
    ]);

    // After animation, keep only new page (no state change, just cleanup)
    const timeout = setTimeout(() => {
      isAnimatingRef.current = false;
      prevKeyRef.current = locationKey;
      // Only keep the new page, with no animation class
      setPages([{ key: locationKey, className: 'page-slide' }]);
    }, 600);

    return () => clearTimeout(timeout);
  }, [locationKey]);

  return (
    <div className="page-transition-container">
      {pages.map((page) => (
        <div key={page.key} className={page.className}>
          {contentRef.current.get(page.key)}
        </div>
      ))}
    </div>
  );
}
