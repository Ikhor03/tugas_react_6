import { Component } from "react";
import daftarMakanan from "../Lib/daftarMakanan";
import Header from "./header";

class MenuMakanan extends Component {

    render() {
        return (
            <div>
                <Header />
                <h3>Daftar makanan favorit: </h3>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            {
                                daftarMakanan.map((data, i) => {
                                    return (
                                        <td key={i}>
                                            <img
                                                src={data.img}
                                                alt={data.namaMakanan}
                                                width="150"
                                                height="100"
                                            />
                                            <center>
                                                <p>{data.namaMakanan}</p>
                                                <p>Harga : Rp. {data.harga}</p>
                                            </center>
                                        </td>

                                    )
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MenuMakanan;