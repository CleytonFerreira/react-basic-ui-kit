import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Projects from './Projects';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Projects />} />
                <Route path="/navbar" element={<Navbar />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;