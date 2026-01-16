import Header from "./pages/header/Header.jsx";
import Footer from "./pages/footer/Footer.jsx";

import './global.css';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/home/HomePage.jsx";
import PicturePage from "./pages/pictures/PicturePage.jsx";
import SubHeader from "./pages/subheader/SubHeader.jsx";
import VideoPage from "./pages/videos/VideoPage.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <SubHeader />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pictures" element={<PicturePage/>}/>
                <Route path="/videos" element={<VideoPage/>}/>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}