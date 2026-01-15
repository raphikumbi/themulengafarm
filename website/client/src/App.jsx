import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import './global.css';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import PictureGallery from "./pages/PictureGallery.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pictures" element={<PictureGallery/>}/>

                {/* Redirect all unknown routes to "/" */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}