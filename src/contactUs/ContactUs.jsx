import { useRef } from 'react';
import './ContactUsStyle.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function ContactUs(){
  const form = useRef();
  const MySwal = withReactContent(Swal)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_fxzhw5f', 'template_xn0lv9i', form.current, {
        publicKey: 'fZ722ARiU_SLVQjMg',
      })
      .then(
        () => {
          MySwal.fire({
            title: "Enviado Correctamente",
            icon: "success",
            draggable: true,
            confirmButtonColor:"#46A7A6"
          });
          console.log('SUCCESS!');
        },
        (error) => {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrió un error al enviar el correo",
            
          });
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