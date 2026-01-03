import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import './global.css';
import "./App.css"

export default function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main className="content">
                    <AppRoutes/>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}