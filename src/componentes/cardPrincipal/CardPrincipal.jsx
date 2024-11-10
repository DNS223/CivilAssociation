import { useEffect, useState } from "react"
import "./CardPrincipal.css"
export default function CardPrincipal ({image,startAnimate}){
    const [animated, setAnimated]=useState(false)
    useEffect(()=>{
        console.log("Change")
        setAnimated(!animated)
    },[startAnimate])
    return(
        <div className={`CardPrincipalContainer ${animated ? 'slideout':'slideout2'}`}>
            <img src={image} alt="" />
        </div>
    )
}