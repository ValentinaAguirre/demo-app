import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../views/Home"

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router >
    );
}