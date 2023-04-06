import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
    return (
        <div className="projects">
            <h1>Projetos</h1>
            <ul>
                <li><Link to="/navbar">Navbar responsivo</Link></li>
                <li><Link to="/sidemenu">Menu lateral</Link></li>
                <li><Link to="/buttons">Botões</Link></li>
            </ul>
        </div>
    )
}

export default Projects