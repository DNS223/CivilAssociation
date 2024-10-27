import AboutUs from "../../aboutUs/AboutUs"
import App from "../../App"
import ContactUs from "../../contactUs/ContactUs"
import  "./header.css"

import { Link, BrowserRouter, Route, Routes } from "react-router-dom"

export default function Header (){
    return(
        <BrowserRouter>
        <div className="HeaderContainer">
            <div className="logoContainer">
            </div>
            <div className="linksContainer">
                <Link to="/">Inicio</Link>
                <Link to="/AboutUs">Nosotros</Link>
                <Link to="/Contacto">Contacto</Link>
            </div>
        </div>
        <Routes>

        <Route path="/" >
            <Route index element={<App/>}/>
            <Route path="AboutUs" element={<AboutUs/>}/>
            <Route path="Contacto" element={<ContactUs/>}/>
        </Route>
        </Routes>

        </BrowserRouter>
    )
}