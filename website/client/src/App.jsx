import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import './global.css';
import "./App.css"
import Home from "./pages/Home.jsx";

export default function App() {
    return (
            <div className="app-container">
                <Header />
                <Home />
                <Footer/>
            </div>
    );
}