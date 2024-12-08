import "./EventoStyles.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function Evento({imgUrl, titulo1, titulo2}){
    return(
        <div className="EventoContainer">
           <img src={imgUrl} alt="" className="imgEvento"/>
           <div className="filtro">
            <div className="bottomContent">
                <p className="tituloEvento">{titulo1} <span >{titulo2}</span> </p>
                
                
            </div>
            <div className="textCardEventoContainer">
                <p className="subTituloCardEvento">Proposito</p>
                <p className="txtCardEvento">Este evento tiene como objetivo principal brindar apoyo y mejorar la calidad de vida  entregando una andadera que facilitará su movilidad e independencia. Con esta acción, buscamos promover un sentido de comunidad, solidaridad y cuidado, demostrando que pequeñas acciones pueden marcar grandes diferencias en la vida de las personas.
                </p>
                <p className="subTituloCardEvento">Beneficio:</p>
                <p className="txtCardEvento">
                La entrega de la andadera a la beneficiada no solo mejora su movilidad, sino que también incrementa su autonomía, permitiéndole realizar actividades cotidianas con mayor seguridad y confianza.</p>
            </div>
           </div>
        </div>
    )
    
}