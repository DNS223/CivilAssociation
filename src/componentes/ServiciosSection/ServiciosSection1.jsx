export default function ServiciosSection1({icon,TitleSSContent,ContenidoPrincipal1,ContenidoPrincipal2,ContenidoPrincipal3,imgServiceSection}){
    return(
        <div className='ServiciosSection'>
          
          <div className='SSContent'>
            <div className='SSContentR'>
              <img src={icon} alt="" className='ServicesLogo'/>
              <p className='TitleSSContent'>{TitleSSContent}</p>
              <p className='SubtitleSSContent'>Ofrecemos orientación legal para proteger los derechos de personas en situación de vulnerabilidad.</p>
              <div className='txtMain'>
                {ContenidoPrincipal1 && <><p className='titulosMain'>Entre las actividades que realizamos son:</p>
                  <li>Orientación legal en temas de derechos humanos, derecho laboral, familiar y civil.</li>
                  <li>Acompañamiento en trámites legales.</li>
                  <li>Educación jurídica para empoderar a la comunidad en la defensa de sus derechos.</li></>}

                {ContenidoPrincipal2 && <><p className='titulosMain'>Jornadas Médicas Asistenciales:</p>
                  <li>Realización de consultas médicas generales.</li>
                  <li>Aplicación de vacunas.</li>
                  <li>Entrega de medicamentos de primera necesidad.</li>
                  <li>Educación en salud preventiva y promoción del bienestar.</li>
                  <li>Planificación familiar.</li>
                  <li>Ayuda psicológica.</li>
                  </>}

                {ContenidoPrincipal3 && <><p className='titulosMain'></p>
                  <li>Identificación de las familias en mayor situación de vulnerabilidad.</li>
                  <li>Recolección y distribución de alimentos y productos de primera necesidad.</li>
                  <li>Coordinación con aliados para la donación de despensas.</li>

                  </>}  

                  <p className='subtitle2Main'>¿Qué estrategias se utilizan?</p>
                  {ContenidoPrincipal1 && <>
                    <li>Colaboración con abogados voluntarios y estudiantes de derecho.</li>
                    <li>Charlas informativas para la comunidad sobre sus derechos y procedimientos legales básicos.</li>
                    <li>Uso de espacios comunitarios para acercar los servicios a las personas que lo requieren.</li>
                  </>}

                  {ContenidoPrincipal2 && <>
                    <li>Coordinación con profesionales de la salud voluntarios y aliados estratégicos como farmacias y laboratorios.</li>
                    <li>Logística para trasladar a las comunidades los insumos médicos necesarios.</li>
                    <li>Campañas de difusión en redes sociales y medios locales para informar a la comunidad de las jornadas.</li>
                  </>}
                  
                  {ContenidoPrincipal3 && <>
                    <li>Recolección de donaciones mediante campañas con empresas y la comunidad.</li>
                    <li>Organización de brigadas de voluntarios para la entrega puerta a puerta.</li>
                    <li>Evaluación periódica de las necesidades alimentarias de las familias beneficiadas.</li>
                  </>}
              </div>
            </div>
            <div className='SSContentL'>
              <img src={imgServiceSection} alt="" className='ImgServicesL'/>
            </div>
            <div className='imgContentSS'>

            </div>
          </div>

          
      </div>
    )
}