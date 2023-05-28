import { useEffect } from "react";
import { useInvoice } from "../context/useContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useInvoice();

  const element = document.documentElement;

  useEffect(() => {
    element.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, []);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      element.classList.remove("dark");
      element.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      element.classList.remove("light");
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="header__action">
      <div className="header__action--toggle" onClick={handleTheme}>
        {theme === "dark" ? (
          <button>
            <ion-icon name="sunny"></ion-icon>
          </button>
        ) : (
          <button>
            <ion-icon name="moon"></ion-icon>
          </button>
        )}
      </div>
      <figure className="header__action--profile">
        <ion-icon name="person"></ion-icon>
      </figure>
    </div>
  );
}
