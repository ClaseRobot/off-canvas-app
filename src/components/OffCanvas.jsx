import '../App.css'
export const OffCanvas = () => {

  return (
    // ---------- Navbar -------------- //
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="#">Offcanvas dark navbar</a>
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* --------- Sidebar --------- */}
        <div className="offcanvas offcanvas-start sidebar text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
            <button type="button" className="btn-close btn-close-white shoadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {/* -------- Sidebar body ------------- */}
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            
            <form className="d-flex mt-3 mt-lg-0" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}