import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './styles/Colors.css';
import './styles/App.css'

function App() {
  return (
      <div className="App">
        <Header />
        <main className="content">
          <h2>Hello World!</h2>
          <p>Welcome to The Mulenga Farm React App</p>
        </main>
        <Footer />
      </div>
  );
}

export default App;