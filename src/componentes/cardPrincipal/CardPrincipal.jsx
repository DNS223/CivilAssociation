import "./CardPrincipal.css"
export default function CardPrincipal ({image}){
    return(
        <div className="CardPrincipalContainer">
            <img src={image} alt="" />
        </div>
    )
}