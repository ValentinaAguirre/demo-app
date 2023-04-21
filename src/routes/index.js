import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FourOFour from "../views/404";
import Home from "../views/Home"
import PokeDetail from "../views/PokeDetail";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<FourOFour />} />
                <Route path="/pokemon/:id" element={<PokeDetail />} />

            </Routes>
        </Router >
    );
}