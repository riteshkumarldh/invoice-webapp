// components
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <ThemeToggle />
      </div>
    </header>
  );
}
