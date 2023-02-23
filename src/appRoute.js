import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Kontak from "./Page/kontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/menuMinuman";

const AppRoute = () => {
    <Router>
        <Routes>
            <Route path="/" exact component={App} />
            <Route path="/menu_makanan" component={MenuMakanan} />
            <Route path="/menu_minumam" component={MenuMinuman} />
            <Route path="/kontak" component={Kontak} />
        </Routes>
    </Router>
}

export default AppRoute;
