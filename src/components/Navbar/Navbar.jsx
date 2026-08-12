import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="navbar">
            <a
                className="navbar__logo"
                href="#home"
                onClick={closeMenu}
            >
                Tianqi Pan
            </a>

            <button
                className="navbar__menuButton"
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation"
                onClick={() =>
                    setIsMenuOpen(currentValue => !currentValue)
                }
            >
                {isMenuOpen ? "Close" : "Menu"}
            </button>

            <nav
                id="main-navigation"
                className={
                    isMenuOpen
                        ? "navbar__navigation navbar__navigation--open"
                        : "navbar__navigation"
                }
                aria-label="Main navigation"
            >
                <ul className="navbar__links">
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" onClick={closeMenu}>
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#experience" onClick={closeMenu}>
                            Experience
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;