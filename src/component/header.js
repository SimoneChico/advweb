import React from 'react';
import {Link} from 'react-router-dom';
   export const Header = () =>{
    return(
        <div>
  {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container px-5">
      <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>

          <li className="nav-item">
            <Link className="nav-link" to='/add-products'>Products</Link>
            </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contacts</Link>
            </li>

          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>

          <li className="nav-item">
            <Link className="nav-link" to="/login">Log In</Link>
            </li>

        </ul>
      </div>
    </div>
  </nav>
  {/* Header*/}
  <header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container px-5">
        <h1 className="masthead-heading mb-0">One Page Wonder</h1>
        <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
      </div>
    </div>
  </header>
</div>

    );
    
}

export default Header
