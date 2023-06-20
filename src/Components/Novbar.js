import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./imges/logo2.png";
// import { Link } from'react-router-dom';



function Novbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img className="logo_img" src={logo1} alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link ul_a active" to='/'>Bosh sahifa</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link ul_a" href="#about" to=''>Haqida</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link ul_a" href="#services" to=''>Hizmatlar</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link ul_a" href="#contact" to=''>Takliflar</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link ul_a" to='/royxat'>Ro'yxatdan o'tish</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link ul_a" to='/login'>Kirish</Link>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>



            {/* <div className="navbar ">
                <div className="container container_nov">
                    <a href="index.html" className="logo "><img src={logo1} alt=""/></a>
                    <div className="navbar__content d-flex justify-content-between aligen-items-center w-100%">
                        <ul className="menu d-flex text-light mb-0">
                            <li className="navbar__item1 me-4"><Link className="ul_a" to='/'>Bosh sahifa</Link></li>
                            <li className="navbar__item1 me-4"><a className="ul_a" href="#about">Haqida</a></li>
                            <li className="navbar__item1 me-4"><a className="ul_a" href="#services"></a></li>
                            <li className="navbar__item1  me-4"><a className="ul_a" href="#contact">Takliflar</a></li>
                            <li className="navbar__item me-4"><Link className="ul_a " to='/royxat'>Ro'yxatdan o'tish</Link></li>
                            <li className="navbar__item1  me-4"><Link className="ul_a" to='/login'>Kirish</Link></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    )
    
}

export default Novbar ; 