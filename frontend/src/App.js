import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import ButtonNav from "./components/buttonNav/ButtonNav";
import Contact from "./pages/contact/Contact";


function App() {
    return (
        <Router>
            <div className="App">
                <ButtonNav />
                <Header />

                <main className="main">
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={About} />
                    <Route path='/service' component={Service} />
                    <Route path="/contact" component={Contact} />
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
