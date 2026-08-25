import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBarsIcon, setIsBarsIcon] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsBarsIcon(!isBarsIcon);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "d-inline-block navbar-link navbar-link-active"
      : "d-inline-block navbar-link";

  return (
    <header className="navbar py-3 fixed-top">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-11 col-sm-10 col-md-11 col-xl-10 d-flex flex-row justify-content-between align-items-center mx-auto p-0">
            <Link className="text-decoration-none navbar-brand" to="/">
              <p className="size25 ps-2 weight600 lh-sm mb-2">
                Lic. Juan Pablo Sanjorge
              </p>
            </Link>
            <div className="d-md-none">
              <button
                type="button"
                className="navbar-toggle"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <FontAwesomeIcon
                  icon={isBarsIcon ? faBars : faXmark}
                  size="lg"
                />
              </button>
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    id="mobile-menu"
                    className="col-12 navbar-mobile-menu pt-2 pb-3 position-absolute top-100 end-0"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="col-11 col-sm-10 d-flex flex-column gap-3 mx-auto">
                      <NavLink className={linkClass} to="/info" onClick={toggleMenu}>
                        Información Profesional
                      </NavLink>
                      <NavLink
                        className={linkClass}
                        to="/articles"
                        onClick={toggleMenu}
                      >
                        Artículos
                      </NavLink>
                      <Link
                        className="btn-pill btn-pill-primary align-self-start"
                        to="/contact"
                        onClick={toggleMenu}
                      >
                        Reservar consulta
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="d-none d-md-flex align-items-center gap-4">
              <NavLink className={linkClass} to="/info">
                Información Profesional
              </NavLink>
              <NavLink className={linkClass} to="/articles">
                Artículos
              </NavLink>
              <Link className="btn-pill btn-pill-primary" to="/contact">
                Reservar consulta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
