import './App.css';
import CardPrincipal from './componentes/cardPrincipal/CardPrincipal';
import CardSiguiente from './componentes/CardSiguiente/CardSiguiente';
import { useState } from 'react';
import Footer from './componentes/footer/Footer';
import CardServicio from './componentes/CardServicio/CardServicio';
import FounderCard from './componentes/FoundersCard/FoundersCard';

function App() {
  const imagesSlider = ["slider1.jpeg", "slider2.png", "slider3.png", "slider4.png","slider1.jpeg" ]
  const fondosSlider=["fondoSlider1.png", "fondoSlider2.png", "fondoSlider3.png", "fondoSlider4.png"]
  const txtSlider = ["Bienvenidos a la Asociación Civil para la Inclusión Social."]
  const subTxtSlider = ["Trabajamos por un futuro más justo e inclusivo para todos."]
  const [caracterValue, setCaracterValue] = useState(0);
  console.log(imagesSlider.length)
  const changeImage =(imageNumber) => {
    if(imageNumber < imagesSlider.length-1){
      setCaracterValue(imageNumber)
    }else{
      setCaracterValue(0)
    }
    
  }
  return (
    <div className="App">

      <div className='containerBienvenido'>
        <img src={fondosSlider[caracterValue]} alt="" className='imgBackground'/>

        <div className='containerLeft'>
        <h1 className='txtBienvenido'>{txtSlider[0]}</h1>
        <p className='txtSub'>{subTxtSlider[0]}</p>
        <button className='btnDonar'>Donar ahora</button>
        </div>
        
        <div className='containerRight'>
          <CardPrincipal image={imagesSlider[caracterValue]}/>
          <CardSiguiente image={imagesSlider[caracterValue+1]} onClick={()=> changeImage(caracterValue+1)}/>
        </div>
      </div>

      <div className='second-section'>
        <CardServicio image="./logoCard1.png" titulo="Nosotros" parrafo="Conoce nuestra misión y equipo"/>
        <CardServicio image="./logoCard2.png" titulo="Servicios" parrafo="Descubre como podemos ayudarte"/>
        <CardServicio image="./logoCard3.png" titulo="Eventos" parrafo="Participa en nuestras actividades"/>
      </div>

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

      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
