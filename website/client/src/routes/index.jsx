import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PictureGallery from '../pages/PictureGallery.jsx';
import NotFound from "../pages/NotFound.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PictureGallery />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
