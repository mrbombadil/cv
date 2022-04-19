import React from 'react'
import { ButtonPrimary } from '../components/ui/ButtonPrimary'
import { ButtonSecondary } from '../components/ui/ButtonSecondary'



export const Home = () => {
  return (  
    <>
        <main id='contentContainer' className='content flex content animate__animated animate__zoomIn'>
            <div className='crisImage'>

            </div>
            <div className='description'>
                <h1>Cristian González</h1>
                <p>Soy un desarrollador web con cierta preferencia por el desarrollo del FrontEnd,
                aunque no me asusta un perfil más orientado a BackEnd. Cuento con experiencia en el
                mundo del desarrollo web, y he abarcado cada una de sus etapas: desde el estudio de 
                experiencia de usuario, arquitectura de la información, diseño centrado en el usuario,
                prototipado, maquetación e implementación del FrontEnd y BackEnd.</p>

                <p>Las tecnologías que más he empleado a lo largo de mi vida son: HTML, CSS, PHP y MySQL.
                Aunque ahora he pasado a JavaScript y me desenvuelvo bien con ReactJS, ExpressJS y MongoDB.</p>
                <div className="home-buttons">
                    <ButtonPrimary url="!#">Descargar CV</ButtonPrimary>
                    <ButtonSecondary url="!#">Contactar</ButtonSecondary>
                </div>
            </div>
            
        </main>
    </>
  )
}
