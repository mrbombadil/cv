import React from 'react'
import { NavLink } from 'react-router-dom'

const PORTFOLIO_DATA = [
    {
        name: 'RACE',
        description: 'Este fue uno de los trabajos que realicé durante mi etapa con Sara para Seguros Race',
        url: 'http://pruebas.walrusteam.com/race/',
        imageSrc: '/images/portfolio/landings/RACE.png'
    },
    {
        name: 'SODEXO',
        description: 'Otra landing, esta vez para Sodexo',
        url: 'http://pruebas.walrusteam.com/sodexo/index-prueba2.html',
        imageSrc: '/images/portfolio/landings/SODEXO.png'
    },
    {
        name: 'DOSDE',
        description: 'Me encargaron realizar el efecto de cabecera que se encoge mediante scroll, y el menú lateral flotante, que se ilumina a su paso por los títulos y hace smooth scroll hacia los anchors de los títulos.',
        url: 'https://www.dosde.com/discover/alhambra-de-granada/',
        imageSrc: '/images/portfolio/landings/DOSDE.jpg'
    },
    {
        name: 'CEPSA WIZINK',
        description: 'Esta landing la maquetamos de cero y yo me encargué de maquetar y programar la calculadora descuento.',
        url: 'http://pruebas.walrusteam.com/cepsa_wizink/',
        imageSrc: '/images/portfolio/landings/CEPSA_WIZINK.png'
    },
    {
        name: 'WIZINK',
        description: 'En esta landing me encargaron un trabajo sencillo. Tenía que modificar algunos iconos e iluminar el menú de arriba según pasaba por los títulos además de hacer smooth scroll en el OnClick.',
        url: 'http://pruebas.walrusteam.com/wizink/',
        imageSrc: '/images/portfolio/landings/WIZINK.png'
    },    
    {
        name: 'TNT',
        description: 'Landing para TNT en la que debía iluminar el menú de arriba a su paso por los apartados de título. También debía hacer smooth scroll en el OnClick.',
        url: 'http://pruebas.walrusteam.com/TNT/',
        imageSrc: '/images/portfolio/landings/TNT.png'
    },

    


    
    
]


const Categories = () => {
    /*
        className={
            () => name === categoryActive ? 'actived' : '' 
        }
    */
    return (
        <nav className='categories'>
            <ul>
                <li><NavLink to="#">Landing HTML y CSS</NavLink></li>
                <li><NavLink to="#">Mantenimiento WordPress</NavLink></li>
                <li><NavLink to="#">PHP/Laravel</NavLink></li>
                <li><NavLink to="#">Webs antiguas en PHP</NavLink></li>
                <li><NavLink to="#">React</NavLink></li>
                <li><NavLink to="#">UOC</NavLink></li>
            </ul>
        </nav>
    )
}

const PortfolioItem = (props) => {
    const {name, description, url, imageSrc} = props;
    return(
    <article>
        <figure>
            <img src={imageSrc} alt={description} />                    
        <figcaption>
            <p>
                <strong>{name}</strong>
                {description}<br/>
                <a rel="noreferrer" href={url} target="_blank">Demo</a>
            </p>
        </figcaption>
        </figure>                    
    </article>
    )
}

export const Portfolio = () => {
  return (
    <>
        <main className='content animate__animated animate__slideInUp'>
            <header className="title">
                <h1>Portfolio</h1>
            </header>
            <Categories/>    
            <div id="simple-bar" data-simplebar>                    
                <section className="portfolioGrid">
                    {
                        PORTFOLIO_DATA.map(work => <PortfolioItem {...work} />)
                    }
                </section>
            </div>
        </main>
    </>
  )
}
