import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const NavBar = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
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
    <header className="navbar-float">
      <nav className={`navbar-inner ${menuOpen ? "navbar-inner-menu-open" : ""}`}>
        <Link className="text-decoration-none navbar-brand" to="/">
          <p className="size20 weight600 lh-sm mb-0">Lic. Juan Pablo Sanjorge</p>
        </Link>

        <div className="d-none d-md-flex align-items-center navbar-links">
          <NavLink className={linkClass} to="/info">
            Información Profesional
          </NavLink>
          <NavLink className={linkClass} to="/articles">
            Artículos
          </NavLink>
        </div>

        <Link
          className={`btn-pill d-none d-md-inline-flex ${
            isContactPage ? "btn-pill-disabled" : "btn-pill-primary"
          }`}
          to="/contact"
        >
          Reservar consulta
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
            <FontAwesomeIcon icon={isBarsIcon ? faBars : faXmark} size="lg" />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-menu"
                className="navbar-mobile-menu p-3"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="d-flex flex-column gap-3">
                  <NavLink
                    className={linkClass}
                    to="/info"
                    onClick={toggleMenu}
                  >
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
                    className={`btn-pill align-self-start ${
                      isContactPage ? "btn-pill-disabled" : "btn-pill-primary"
                    }`}
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
      </nav>
    </header>
  );
};
