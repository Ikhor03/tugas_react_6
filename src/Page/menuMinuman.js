import { Component } from "react";
import daftarMinuman from "../Lib/daftarMinuman";
import Header from "./header";

class MenuMinuman extends Component {

    render() {
        return (
            <div>
            <Header/>
                <h3>Daftar Minuman favorit: </h3>
                <table style={{width : "100%"}}>
                    <tbody>
                        <tr>
                            {
                                daftarMinuman.map((data, i) => {
                                    return (
                                        <td key={i}>
                                            <img
                                                src={data.img}
                                                alt={data.namaMinuman}
                                                width="150"
                                                height="100"
                                            />
                                            <center>
                                                <p>{data.namaMinuman}</p>
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

export default MenuMinuman;