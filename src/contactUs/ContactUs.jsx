import './ContactUsStyle.css'
export default function ContactUs(){
    return(
        <div className="ContactSectionContainer">
            <div className='ContactContainer'>
                <div className='ContactLeftContainer'>
                    <img src="./ContactImg.jpeg" alt="" className='ImgContact'/>
                </div>

                <div className='ContactRightContainer'>
                    <img src="./LogoParrf.jpeg" alt="" className='logoForm'/>
                    <div className='FormContainer'>
                        <div className='FirstsInputs'>
                            <input type="text" className='firstInput inputContact' placeholder='Nombre'/>
                            <input type="text" className='firstInput inputContact' placeholder='Apellido'/>
                        </div>
                        <div className='OtherInputs'>
                        <input type="text" className='ohterInputs inputContact' placeholder='Teléfono'/>
                        <input type="text" className='ohterInputs inputContact' placeholder='Correo electrónico'/>
                        <input type="text" className='ohterInputs inputContact' placeholder='Motivo de donación'/>
                        <input type="button" className='ohterInputs inputContact btnEnviar' placeholder='Teléfono' value="Enviar"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}