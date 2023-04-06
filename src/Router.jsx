import { HashRouter, Routes, Route } from 'react-router-dom'
import Projects from './Projects';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Buttons from './components/Buttons';


function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Projects />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/sidemenu" element={<SideMenu />} />
                <Route path="/buttons" element={<Buttons />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;