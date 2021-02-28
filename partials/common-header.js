import Link from 'next/link'

const Header = () => (
    <header className="header p-5">
          <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/home">
              <a className="navbar-brand">
                  <img src="images/logo.png" loading="lazy" alt="Aidos"/>
              </a>
              </Link>
              <button id="buttonNavbarNavDropdown" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false" aria-controls="navbarNavDropdown">
                  <img id="navbarImage" src="images/burger_menu.svg" loading="lazy" alt="Adios menu"/>
              </button>
              <div className="navbar-collapse collapse" id="navbarNavDropdown">
                  <div className="navbar-collapse w-100 order-3 dual-collapse2 right">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="https://trade.aidosmarket.com">Trade</a>
                          </li>
                      </ul>
              {/*
                      <div className="dropdown logout">
                          <button className="btn logout dropdown-toggle btn-blue" type="button" id="dropdownLogoutButton" data-bs-toggle="dropdown" aria-expanded="false">
                              Someone Name
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownLogoutButton">
                              <li><a className="dropdown-item" href="/logout">Logout</a></li>
                          </ul>
                      </div>
              */}
                  </div>
              </div>
          </nav>
      </header>
  )
  
  export default Header