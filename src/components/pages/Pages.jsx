import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Home';
import Events from './Events';
import Collaboration from './Collaboration';
import AboutUs from './AboutUs';
import Contact from './Contact';
import NotFound from './NotFound';

const Pages = ({ }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="events" element={<Events />} />
                    <Route path="collab" element={<Collaboration />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Pages