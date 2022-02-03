import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import '../style/Navbar.css'

const Navbar = () => {

    // Corresponding at / :
      const location = useLocation();
      // console.log(location);
      


    return<>
<nav className="navbar navbar-expand-lg navbar-light bg-light text-light">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to={"#"}>React TMDB</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link text-light ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link text-light ${location.pathname === "/films" ? "active" : ""}`} aria-current="page" to={"/films"}>Films Populaires</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link" to={"#"}>Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled">Disabled</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </>
}

export default Navbar;

