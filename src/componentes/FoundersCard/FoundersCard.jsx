import "./FoundersCardStyle.css"
export default function FounderCard({img}){
    console.log(img)
    return(
        <div className="FounderCardContainer">
            <div className="ImageContainer"><img src={img} alt="" /></div>
            <p className="NombreTxt">Vicente Garrido Mirafuentes</p>
        </div>
    )
}