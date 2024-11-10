import "./cardSiguiente.css"
export default function CardSiguiente ({image, onClick}){
    return(
        <div className="CardSiguienteContainer" onClick={onClick}>
            <img src={image} alt="" />
        </div>
    )
}