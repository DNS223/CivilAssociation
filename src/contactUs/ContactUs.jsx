import { useRef } from 'react';
import './ContactUsStyle.css'
import emailjs from '@emailjs/browser';
export default function ContactUs(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Se envia")
    emailjs
      .sendForm('service_fxzhw5f', 'template_xn0lv9i', form.current, {
        publicKey: 'fZ722ARiU_SLVQjMg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
        <div className="ContactSectionContainer">
            <div className='ContactContainer'>
                <div className='ContactLeftContainer'>
                    <img src="./ContactImg.jpeg" alt="" className='ImgContact'/>
                </div>

                <div className='ContactRightContainer'>
                    <img src="./LogoParrf.jpeg" alt="" className='logoForm'/>
                    <form className='FormContainer' ref={form} onSubmit={sendEmail}>
                        <div className='FirstsInputs'>
                            <input type="text" className='firstInput inputContact' placeholder='Nombre' name="user_name"/>
                            <input type="text" className='firstInput inputContact' placeholder='Apellido' name="user_lastname"/>
                        </div>
                        <div className='OtherInputs'>
                        <input type="text" className='ohterInputs inputContact' placeholder='Teléfono' name="user_phone"/>
                        <input type="email" className='ohterInputs inputContact' placeholder='Correo electrónico' name="user_email"/>
                        <input type="text" className='ohterInputs inputContact' placeholder='Motivo de donación' name="message"/>
                        <input type="submit" className='ohterInputs inputContact btnEnviar'  value="Enviar"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}