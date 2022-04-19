import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import { ProgressBar } from '../components/ui/ProgressBar';
import { TimeLine } from '../components/ui/TimeLine';
import { ACADEMIC_DATA } from '../data/academic';
import { EXPERIENCE_DATA } from '../data/experience';

export const Curriculum = () => {
  return (
        <>
            <main className='content animate__animated animate__slideInRight'>
                <header className="title">
                    <h1>Currículum</h1>
                </header>
                <div id="simple-bar" data-simplebar>                    
                    <section className="curriculum">
                        <div className="col1">
                            <section>
                            <h2>Educación</h2>
                            {
                                ACADEMIC_DATA.map(data => <TimeLine year={data.year} name={data.name} title={data.title} description={data.description}/>)
                            }
                            </section>
                            <section>
                            <h2>Experiencia</h2>
                            {
                                EXPERIENCE_DATA.map(data => <TimeLine year={data.year} name={data.name} title={data.title} description={data.description}/>)
                            }
                            </section>
                        </div>
                        <div className="col2">
                        <h2>Maquetación</h2>
                            <ProgressBar percentage="90%" color="#04b4e0">HTML</ProgressBar>
                            <ProgressBar percentage="85%" color="#04b4e0">CSS</ProgressBar>
                            <ProgressBar percentage="75%" color="#04b4e0">Figma</ProgressBar>
                        <h2>Lenguajes y tecnologías FrontEnd</h2>
                            <ProgressBar percentage="80%" color="#d6e105">JavaScript</ProgressBar>
                            <ProgressBar percentage="90%" color="#d6e105">jQuery</ProgressBar>
                            <ProgressBar percentage="75%" color="#d6e105">ReactJS</ProgressBar>
                        <h2>Lenguajes y tecnologías BackEnd</h2>
                            <ProgressBar percentage="70%" color="#05e18c">Node/ExpressJS</ProgressBar>
                            <ProgressBar percentage="70%" color="#05e18c">PHP/Laravel</ProgressBar>                            
                        <h2>Bases de datos</h2>
                            <ProgressBar percentage="80%" color="#e1a205">MySQL</ProgressBar>
                            <ProgressBar percentage="70%" color="#e1a205">MongoDB</ProgressBar>
                            <ProgressBar percentage="50%" color="#e1a205">Firebase</ProgressBar>
                        <h2>Animación</h2>
                            <ProgressBar percentage="90%" color="#9f05e1">Processing/P5JS</ProgressBar>                            
                            <ProgressBar percentage="40%" color="#9f05e1">CSS (Animación)</ProgressBar>
                        <h2>Otros lenguajes</h2>
                            <ProgressBar percentage="60%" color="#e10505">Java</ProgressBar>
                            <ProgressBar percentage="70%" color="#e10505">C#</ProgressBar>
                            <ProgressBar percentage="60%" color="#e10505">C</ProgressBar>
                            <ProgressBar percentage="50%" color="#e10505">Python</ProgressBar>
                        <h2>Gestores de contenido (CMS)</h2>
                            <ProgressBar percentage="90%" color="#0415e0">WordPress/WooCommerce</ProgressBar>
                        <h2>Otras tecnologías de servidor</h2>
                            <ProgressBar percentage="90%" color="#e105b1">GNU/Linux</ProgressBar>
                            <ProgressBar percentage="80%" color="#e105b1">Apache</ProgressBar>
                            <ProgressBar percentage="80%" color="#e105b1">Shell Script</ProgressBar>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}