import { useEffect, useState } from "react"
import "./cardSiguiente.css"
export default function CardSiguiente ({image, onClick, startAnimate}){
    const [animated, setAnimated]=useState(false)
    useEffect(()=>{
        console.log("Change")
        setAnimated(!animated)
    },[startAnimate])
    return(
        <div className={`CardSiguienteContainer ${animated ? 'slideIn':'slideIn2'}`} onClick={onClick}>
            <img src={image} alt="" />
        </div>
    )
}