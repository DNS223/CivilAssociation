import './App.css';
import CardPrincipal from './componentes/cardPrincipal/CardPrincipal';
import CardSiguiente from './componentes/CardSiguiente/CardSiguiente';
import { useState } from 'react';
import Footer from './componentes/footer/Footer';
import CardServicio from './componentes/CardServicio/CardServicio';


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
      {/* Servicios begin */}
      <div className='ServiciosSection'>
          <div className='FrstSS'>
            <p className='TitleSS'>Nuestros Servicios</p>
            <p className='txtSS'>En nuestra asociación, creemos firmemente que la inclusión es el camino hacia una sociedad 
              más justa y equitativa.Nos dedicamos a derribar barreras y a construir puentes que conecten 
              a todas las personas, sin importar sus circunstancias o antecedentes. Nuestros servicios están 
              diseñadospara empoderar, proteger y mejorar la calidad de vida de quienes más lo necesitan.</p>
          </div>
          <div className='SSContent'>
            <div className='SSContentR'>
              <img src="/ServicesLogo.png" alt="" className='ServicesLogo'/>
              <p className='TitleSSContent'>Asesoría Jurídica</p>
              <p className='SubtitleSSContent'>Ofrecemos orientación legal para proteger los derechos de personas en situación de vulnerabilidad.</p>
              <div className='txtMain'>
                <p className='titulosMain'>Entre las actividades que realizamos son:</p>
                  <li>Orientación legal en temas de derechos humanos, derecho laboral, familiar y civil.</li>
                  <li>Acompañamiento en trámites legales.</li>
                  <li>Educación jurídica para empoderar a la comunidad en la defensa de sus derechos.</li>

                  <p className='subtitle2Main'>¿Qué estrategias se utilizan?</p>
                  <li>Colaboración con abogados voluntarios y estudiantes de derecho.</li>
                  <li>Charlas informativas para la comunidad sobre sus derechos y procedimientos legales básicos.</li>
                  <li>Uso de espacios comunitarios para acercar los servicios a las personas que lo requieren.</li>
                
              </div>
            </div>
            <div className='SSContentL'>
              <img src="/ImgServicesL.jfif" alt="" className='ImgServicesL'/>
            </div>
            <div className='imgContentSS'>

            </div>
          </div>
      </div>
      {/* Servicios end */}
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
