import "./Header.scss"


export const Header = () => {

    return(
        <header className="header">
          < div className="header_container">
            <h1 className="header_logo">MI PASTILLITA</h1>
            
              <nav className="navbar">
                <a className="nav__link" href="#">nosotros</a>
                <a className="nav__link" href="#">productos</a>
                <a className="nav__link" href="#">servicios</a>
              </nav>
          </div>
        </header>
    )
}