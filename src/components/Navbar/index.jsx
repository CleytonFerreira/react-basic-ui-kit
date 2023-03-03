import navStyle from './Navbar.module.css'


function Navbar() {
    return (
        <nav className={navStyle.navbar}>
            <div className={navStyle.logo}>Logo</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={navStyle.responsive_navbar}>
                <button className={navStyle.toggle_btn} aria-label="Abrir menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;