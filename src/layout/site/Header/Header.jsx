import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">Start Bootstrap</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>

            </ul>
            <form className="d-flex">
                <Link  to="/cart" className="btn btn-outline-dark" >
                    <i className="bi-cart-fill me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </Link>
            </form>
        </div>
    </div>
    </nav>
  )
}

export default Header