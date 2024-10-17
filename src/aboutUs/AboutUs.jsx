import FounderCard from "../componentes/FoundersCard/FoundersCard"
import './AboutUsStyles.css'
export default function AboutUs(){
    return(
        <div className="aboutUsPageContainer">
<div className="aboutUsSection">
        <div className='HeaderAUS'>
          <p className='TitleAUS'>¿Quiénes somos?</p>
          <p className='SubtitleAUS'>La organización y Asociación Civil para la Inclusión Social fue fundada el 12 de Julio de 2019.</p>
        </div>

        <div className='BodyAUS'>
          <div className='FirstSectionBody'>
          <div className='ParrfContainer'> 
          <div className='FirstParf'>
            <p className='TitleBod'>Nuestra Misión</p>
            <p className='txtBod'>Promover la inclusión social y mejorar la calidad de vida de los sectores más vulnerables, 
              proporcionando asistencia en áreas clave como salud, asesoría jurídica, seguridad alimentaria y empoderamiento económico. 
              Trabajamos de la mano con actores estratégicos y la comunidad,creando redes de apoyo que fomenten la 
              igualdad de oportunidades y el desarrollo integral de las personas</p>
              
          </div>

          <div className='SecondParf'>
            <p className='TitleBod'>Nuestra Visión</p>
            <p className='txtBod'>Aspiramos a ser una organización líder en el ámbito asistencial, reconocida por su 
              capacidad para transformar comunidades, reducir la desigualdad y generar oportunidades de crecimiento y 
              desarrollo para quienes más lo necesitan. Nuestra visión es expandir nuestro alcance para impactar a un 
              mayor número de personas, llevando nuestros servicios a otras regiones, y establecer un modelo de inclusión 
              social replicable en todo el país.
            </p>
              
          </div>

          </div>
          {/* ParrfContainer End */}
          <img src="./LogoParrf.jpeg" alt="" />
          </div>
          {/* EndFirstSection */}

          <div className='SecondSection'>
            <p className='TtileSecondSecBod'>Nuestra Trayectoria</p>
            <div className='SecondSectBody'>
              <img src="./Lista.png" alt="" />
              <div className='SecondSectParrafos'>
                <div className='ScndParrf'>
                <p className='SecondParrfDate'>2019</p>
                <p className='SecondParrfTxt'>Fundación de la organización con el objetivo de promover la inclusión social.</p>
                </div>
                <div className='ScndParrf'>
                <p className='SecondParrfDate'>2020</p>
                <p className='SecondParrfTxt'>Lanzamiento de nuestros primeros programas de asistencia comunitaria.</p>
                </div>
                <div className='ScndParrf'>
                <p className='SecondParrfDate'>2021</p>
                <p className='SecondParrfTxt'>Expansión de servicios a nuevas regiones y establecimiento de alianzas estratégicas.</p>
                </div>  
                <div className='ScndParrf'>
                <p className='SecondParrfDate'>2022</p>
                <p className='SecondParrfTxt'>Reconocimiento nacional por nuestro impacto en la reducción de la desigualdad.</p>
                </div>
              </div>
            </div>

            <div className='Founders'>
              <p className='FoundersTitle'>Nuestros Fundadores</p>
              <div className='FoundersCardContainer'>
                <FounderCard/>
                <FounderCard/>
                <FounderCard/>
              </div>
            </div>

            <div className='UnirseSection'>
              <div className='UnirseContainer'>
                <p className='UnirseTitle'>Únete a nuestra Causa</p>
                <p className='UnirseTxt'>Juntos podemos crear un futuro más inclusivo y justo para todos</p>
                <button className='btnDonar'>Donar ahora</button>
              </div>
            </div>

          </div>

        </div>
      </div>
        </div>
    )
}