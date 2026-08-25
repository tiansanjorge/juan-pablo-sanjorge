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

  return (
    <header className="fondoVerdeO blanco py-3 fixed-top shadow">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-11 col-sm-10 col-md-11 col-xl-10 d-flex flex-row justify-content-between align-items-center mx-auto p-0">
            <Link className="text-decoration-none blanco" to="/">
              <p className="size30 ps-2 weight500 lh-sm mb-2">
                Lic. Juan Pablo Sanjorge
              </p>
            </Link>
            <div className="d-md-none">
              <button
                type="button"
                className="border-0 blanco fondoVerdeO hoverAmarillo"
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
                    className="col-12 fondoVerdeO sombra pt-2 pb-3 position-absolute top-100 end-0"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="col-11 col-sm-10 d-flex flex-column mx-auto">
                      <div className="text-decoration-none p-0">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "d-inline-block amarillo text-decoration-none"
                              : "d-inline-block text-decoration-none blanco hoverAmarillo subrayado2"
                          }
                          to="/info"
                          onClick={toggleMenu}
                        >
                          <div className="">Información Profesional</div>
                        </NavLink>
                      </div>
                      <div className="text-decoration-none p-0">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "d-inline-block amarillo text-decoration-none"
                              : "d-inline-block text-decoration-none blanco hoverAmarillo subrayado2"
                          }
                          to="/articles"
                          onClick={toggleMenu}
                        >
                          <div className="mt-1">Artículos</div>
                        </NavLink>
                      </div>
                      <div className="text-decoration-none p-0">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "d-inline-block amarillo text-decoration-none"
                              : "d-inline-block text-decoration-none blanco hoverAmarillo subrayado2"
                          }
                          to="/contact"
                          onClick={toggleMenu}
                        >
                          <div className="mt-1">Contacto</div>
                        </NavLink>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="d-none d-md-flex col-5 justify-content-between align-items-center text-decoration-none">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "d-inline-block amarillo text-decoration-none"
                    : "d-inline-block text-decoration-none blanco hoverAmarillo subrayado"
                }
                to="/info"
              >
                <div className="d-flex d-lg-block flex-column">
                  Información <span>Profesional</span>
                </div>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "d-inline-block amarillo text-decoration-none"
                    : "d-inline-block text-decoration-none blanco hoverAmarillo subrayado"
                }
                to="/articles"
              >
                <div>Artículos</div>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "d-inline-block amarillo text-decoration-none"
                    : "d-inline-block text-decoration-none blanco hoverAmarillo subrayado"
                }
                to="/contact"
              >
                <div>Contacto</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
