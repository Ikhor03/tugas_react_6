import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Kontak from "./Page/kontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/menuMinuman";

class AppRoute extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/" exact element={<App />} />
                        <Route path="/menu_makanan" element={<MenuMakanan />} />
                        <Route path="/menu_minuman" element={<MenuMinuman />} />
                        <Route path="/kontak" element={<Kontak />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default AppRoute;
