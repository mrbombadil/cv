import { NavLink } from "react-router-dom"

export const Nav = (props) => {
  return(
      <nav {...props}>        
          <ul>
              <li>
                  <NavLink to='/'>
                      <span className="lnr lnr-user"></span>
                      <span className="link-text">Sobre mí</span>
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/curriculum'>
                      <span className='lnr lnr-graduation-hat'></span>
                      <span className="link-text">Curriculum</span>
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/portfolio'>
                      <span className="lnr lnr-briefcase"></span>
                      <span className="link-text">Portfolio</span>
                  </NavLink>
              </li>
              <li>
                  <a href="#contact" data-object="page">
                      <span className="lnr lnr-envelope"></span>
                      <span className="link-text">Contacta</span>
                  </a>
              </li>
          </ul>
      </nav>
  )
}