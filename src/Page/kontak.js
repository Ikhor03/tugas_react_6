import { Component } from "react";
import "../style/kontak.css";
import Header from "./header";

class Kontak extends Component{
    render() {
        return(
            <div id="kontak_bg">
                <Header />
                <div className="kontak">
                    <h3>
                        jl.Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, DKI Jakarta 13860{" "}
                    </h3>
                    <p>08539458375</p>

                </div>
            </div>
        )
    }
}

export default Kontak;