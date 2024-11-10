import './App.css';
import CardPrincipal from './componentes/cardPrincipal/CardPrincipal';
import CardSiguiente from './componentes/CardSiguiente/CardSiguiente';
import { useEffect, useState } from 'react';
import Footer from './componentes/footer/Footer';
import CardServicio from './componentes/CardServicio/CardServicio';
import ServiciosSection1 from './componentes/ServiciosSection/ServiciosSection1';


function App() {
  
  const imagesSlider = ["slider1.webp", "slider2.webp", "slider3.webp", "slider4.webp","slider1.webp" ]
  const fondosSlider=["fondoSlider1.png", "fondoSlider2.png", "fondoSlider3.png", "fondoSlider4.png"]
  const txtSlider = ["Bienvenidos a la Asociación Civil para la Inclusión Social.", "Donde transformamos vidas, forjando inclusión",
                     "Construyendo puentes hacia la igualdad","Se parte del cambio: únete a nuestra causa"]
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
  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };
  
  useEffect(() => {
    preloadImages([...imagesSlider, ...fondosSlider]);
  }, []);
  return (
    <div className="App">

      <div className='containerBienvenido'>
        <img src={fondosSlider[caracterValue]} alt="" className='imgBackground'/>

        <div className='containerLeft'>
        <h1 className='txtBienvenido'>{txtSlider[caracterValue]}</h1>
        <p className='txtSub'>{subTxtSlider[0]}</p>
        
        </div>
        <a className='btnDonarInicio'>Donar ahora</a>
        <div className='containerRight'>
          <div className='CardPrincipal'>
            <CardPrincipal image={imagesSlider[caracterValue]}/>
          </div>
          
          <CardSiguiente image={imagesSlider[caracterValue+1]} onClick={()=> changeImage(caracterValue+1)}/>
        </div>
      </div>

      <div className='second-section'>
        <CardServicio image="./logoCard1.png" titulo="Nosotros" parrafo="Conoce nuestra misión y equipo"/>
        <CardServicio image="./logoCard2.png" titulo="Servicios" parrafo="Descubre como podemos ayudarte"/>
        <CardServicio image="./logoCard3.png" titulo="Eventos" parrafo="Participa en nuestras actividades"/>
      </div>
      {/* Servicios begin */}
      <div className='FrstSS'>
            <p className='TitleSS'>Nuestros Servicios</p>
            <p className='txtSS'>En nuestra asociación, creemos firmemente que la inclusión es el camino hacia una sociedad 
              más justa y equitativa.Nos dedicamos a derribar barreras y a construir puentes que conecten 
              a todas las personas, sin importar sus circunstancias o antecedentes. Nuestros servicios están 
              diseñadospara empoderar, proteger y mejorar la calidad de vida de quienes más lo necesitan.</p>
          </div>
      <ServiciosSection1 icon="/ServicesLogo.png" TitleSSContent="Asesoría Jurídica" 
      SubtitleSSContent="Ofrecemos orientación legal para proteger los derechos de personas en situación de vulnerabilidad."
      ContenidoPrincipal1={true} imgServiceSection="/ImgServicesL.jfif"/>


      <ServiciosSection1 icon="/ServiceHealthLogo.png" TitleSSContent="SERVICIOS DE SALUD"
      SubtitleSSContent="Brindamos atención médica gratuita a personas que no tienen fácil acceso a servicios de salud."
      ContenidoPrincipal2={true} imgServiceSection="/ServiceHealthImg.jpg"/>

      <ServiciosSection1 icon="/ServiceDespensasLogo.png" TitleSSContent="ENTREGA DE DESPENSAS"
      SubtitleSSContent="Proporcionamos ayuda alimentaria a familias de escasos recursos, contribuyendo a mejorar su seguridad alimentaria."
      ContenidoPrincipal3={true} imgServiceSection="/ServiceDespensasImg.png"/>
      {/* Servicios end */}
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
