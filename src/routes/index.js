import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FourOFour from "../views/404";
import Home from "../views/Home"

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<FourOFour />} />
            </Routes>
        </Router >
    );
}