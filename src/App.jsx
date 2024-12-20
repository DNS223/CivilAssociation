import './App.css';
import CardPrincipal from './componentes/cardPrincipal/CardPrincipal';
import CardSiguiente from './componentes/CardSiguiente/CardSiguiente';
import { useEffect, useState } from 'react';
import Footer from './componentes/footer/Footer';
import CardServicio from './componentes/CardServicio/CardServicio';
import ServiciosSection1 from './componentes/ServiciosSection/ServiciosSection1';
import Evento from './componentes/EventoComponent/Evento';


function App() {
  
  const imagesSlider = ["slider1.webp", "slider2.webp", "slider3.webp", "slider4.webp","slider1.webp" ]
  const fondosSlider=["fondoSlider1.png", "fondoSlider2.png", "fondoSlider3.png", "fondoSlider4.png"]
  const txtSlider = ["Bienvenidos a la Asociación Civil para la Inclusión Social.", "Donde transformamos vidas, forjando inclusión",
                     "Construyendo puentes hacia la igualdad","Se parte del cambio: únete a nuestra causa"]
  const subTxtSlider = ["Trabajamos por un futuro más justo e inclusivo para todos."]
  const [caracterValue, setCaracterValue] = useState(0);
  const [animate, setAnimate] = useState(false);

 

  const changeImage = async(imageNumber) => {
    if(imageNumber < imagesSlider.length-1){
      setAnimate(true)
      setTimeout(() => {
        setCaracterValue(imageNumber)
        setAnimate(false); // Reactiva la animación después de cambiar la imagen
      },800);
    }else{
      setAnimate(true)
      setTimeout(() => {
        setCaracterValue(0)
        setAnimate(false); // Reactiva la animación después de cambiar la imagen
      },800);
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
        <a className='btnDonarInicio' href='/Contacto'>Donar ahora</a>
        <div className='containerRight'>
          <div className={animate ? "slideOut":'slideOut2'}>
            <CardPrincipal image={imagesSlider[caracterValue]}/>
          </div>
          
          <div className={animate ? 'slideIn' : 'slideIn2'}>
          <CardSiguiente image={imagesSlider[caracterValue+1]} onClick={()=> changeImage(caracterValue+1)}/>
          </div>
        </div>
      </div>

      <div className='second-section'>
        <CardServicio image="./logoCard1.png" titulo="Nosotros" parrafo="Conoce nuestra misión y equipo" link="/AboutUs"/>
        <CardServicio image="./logoCard2.png" titulo="Servicios" parrafo="Descubre como podemos ayudarte" link="#Servicios"/>
        <CardServicio image="./logoCard3.png" titulo="Eventos" parrafo="Participa en nuestras actividades" link="#Eventos"/>
      </div>
      {/* Servicios begin */}
      <div className='FrstSS'>
            <p className='TitleSS' id='Servicios'>Nuestros Servicios</p>
            <p className='txtSS'>En nuestra asociación, creemos firmemente que la inclusión es el camino hacia una sociedad 
              más justa y equitativa. Nos dedicamos a derribar barreras y a construir puentes que conecten 
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
      
      {/* Eventos start */}
      <div className='EventosSection'>
        <div className='EventosTitulo' id='Eventos'>Eventos</div>
        <div className='EventosContainer'>
          <Evento imgUrl="/FotoEvento1.jpg" titulo1="Andadera" titulo2="a Beneficiencia"/>
          <Evento imgUrl="/FotoEvento2.jpg" titulo1="Experiencia " titulo2="de entretenimiento"/>
          <Evento imgUrl="/FotoEvento3.jpg" titulo1="Donación " titulo2="de pelotas"/>
          <Evento imgUrl="/FotoEvento4.jpg" titulo1="Entrega " titulo2="de despensa"/>
        </div>
      
      </div>
        
      {/* Eventos end */}
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
