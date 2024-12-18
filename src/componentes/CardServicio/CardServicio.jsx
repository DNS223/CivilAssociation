import "./CardServicio.css"
export default function CardServicio({image, titulo, parrafo, link}){
    return(
        <div className="CardServicioContainer" >
            <img src={image} alt="" className="iconCard"/>
            <a className="titulo" href={link}>{titulo}</a>
            <p className="parrafo">{parrafo}</p>
        </div>
    )
}