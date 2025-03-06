import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Cada vez que cambia la ruta, subimos al inicio
  }, [pathname]);

  return null; // Este componente no renderiza nada
}

export default ScrollToTop;
