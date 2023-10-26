import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBarsIcon, setIsBarsIcon] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsBarsIcon(!isBarsIcon);
  };

  return (
    <header className="fondoVerdeO blanco py-3 fixed-top shadow">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-11 col-sm-10 col-md-11 col-xl-10 d-flex flex-row justify-content-between align-items-center mx-auto p-0">
            <Link className="text-decoration-none blanco" to="/">
              <h1 className="size30 ps-2">Juan Pablo Sanjorge</h1>
            </Link>
            <div className="d-md-none">
              <button
                className="border-0 blanco fondoVerdeO hoverAmarillo"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={isBarsIcon ? faBars : faXmark} size="lg" />
              </button>
              {menuOpen && (
                <div
                  className="col-12 fondoVerdeO sombra py-2 position-absolute top-100 end-0"
                >
                  <div className="col-11 col-sm-10 d-flex flex-column mx-auto">
                    <div className="text-decoration-none p-0">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "verdeC weight600 text-decoration-none"
                            : "text-decoration-none blanco hoverAmarillo"
                        }
                        to="/info"
                        onClick={toggleMenu}
                      >
                        <div className="pb-1">Información Profesional</div>
                      </NavLink>
                    </div>
                    <div className="text-decoration-none p-0">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "verdeC weight600 text-decoration-none"
                            : "text-decoration-none blanco hoverAmarillo"
                        }
                        to="/articles"
                        onClick={toggleMenu}
                      >
                        <div className="pb-1">Artículos</div>
                      </NavLink>
                    </div>
                    <div className="text-decoration-none p-0">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "verdeC weight600 text-decoration-none"
                            : "text-decoration-none blanco hoverAmarillo"
                        }
                        to="/contact"
                        onClick={toggleMenu}
                      >
                        <div className="pb-1">Contacto</div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="d-none d-md-flex col-5 justify-content-between align-items-center text-decoration-none">
              <NavLink className="text-decoration-none" to="/info">
                <div className="d-flex d-lg-block flex-column blanco hoverAmarillo">
                  Información <span>Profesional</span>
                </div>
              </NavLink>
              <NavLink className="text-decoration-none" to="/articles">
                <div className="blanco hoverAmarillo">Artículos</div>
              </NavLink>
              <NavLink className="text-decoration-none" to="/contact">
                <div className="blanco hoverAmarillo">Contacto</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
