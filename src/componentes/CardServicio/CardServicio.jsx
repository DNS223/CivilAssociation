import "./CardServicio.css"
export default function CardServicio({image, titulo, parrafo}){
    return(
        <div className="CardServicioContainer" >
            <img src={image} alt="" className="iconCard"/>
            <p className="titulo">{titulo}</p>
            <p className="parrafo">{parrafo}</p>
        </div>
    )
}