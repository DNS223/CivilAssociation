import "./CardServicio.css"
import { Link, animateScroll as scroll } from "react-scroll";
export default function CardServicio({image, titulo, parrafo, link}){
    return(
        <div className="CardServicioContainer" >
            <img src={image} alt="" className="iconCard"/>
            {link=="/AboutUs" ? <a className="titulo" href={link}>{titulo}</a>: 
            <Link
            className="titulo"
            to={link.replace("#", "")} // Quita el "#" para usar el ID directamente
            smooth={true}
            duration={500}
            offset={-50} // Ajusta si tienes un navbar fijo
          >
            {titulo}
          </Link>}
            
            <p className="parrafo">{parrafo}</p>
        </div>
    )
}