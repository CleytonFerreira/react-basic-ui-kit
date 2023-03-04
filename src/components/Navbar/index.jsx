import { useState } from 'react';
import navStyle from './Navbar.module.css'


const Navbar = () => {
    const [open, setOpen] = useState(false);

    function toggleButton() {
        setOpen(!open);
    }

    return (
        <nav className={navStyle.navbar}>
            <div className={navStyle.logo}>Logo</div>
            <ul className={`${open ? navStyle.show : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={navStyle.responsive_navbar}>
                <button className={`${navStyle.toggle_btn} ${open ? navStyle.open : ''}`} onClick={toggleButton}
                    aria-label="Abrir menu"
                    aria-expanded={open ? 'true' : 'false'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;