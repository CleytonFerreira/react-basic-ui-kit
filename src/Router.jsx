import { HashRouter, Routes, Route } from 'react-router-dom'
import Projects from './Projects';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Projects />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/sidemenu" element={<SideMenu />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;