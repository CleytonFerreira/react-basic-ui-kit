import { useState } from "react";
import sideMenuStyle from './SideMenu.module.css';

const SideMenu = () => {
    const [open, setOpen] = useState(false);

    function toggleButton() {
        setOpen(!open);
    }

    return (
        <div className={`${sideMenuStyle.menu} ${open ? sideMenuStyle.show: ''}` }>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <button className={`${sideMenuStyle.toggle_menu} ${open ? sideMenuStyle.open : ''}`} 
                    onClick={toggleButton}
                    aria-label="Abrir menu"
                    aria-expanded={open ? 'true' : 'false'}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}

export default SideMenu;