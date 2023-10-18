import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fondoVerdeO blanco py-3 fixed-top">
      <div className="container">
        <div className="row ">
          <div className="col-12 d-flex flex-row justify-content-between align-items-center">
            <Link className="text-decoration-none blanco" to="/">
              <h1 className="size30">Juan Pablo Sanjorge</h1>
            </Link>
            <div className="d-md-none">
              <Dropdown isOpen={menuOpen} toggle={toggleMenu}>
                <DropdownToggle className="border-0 dropdown">
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </DropdownToggle>
                <DropdownMenu className="p-0 bordeCuadrado mt-2">
                  <DropdownItem className="hoverFondoCeleste text-decoration-none p-0">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#005651" : "#2d3047",
                        textDecoration: "none",
                        fontWeight: isActive ? "600" : "500",
                        fontSize: isActive ? 20 : 18,
                      })}
                      to="/info"
                    >
                      <div className="text-center px-2">
                        Información Profesional
                      </div>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem className="hoverFondoCeleste text-decoration-none p-0">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#005651" : "#2d3047",
                        textDecoration: "none",
                        fontWeight: isActive ? "600" : "500",
                        fontSize: isActive ? 20 : 18,
                      })}
                      to="/articles"
                    >
                      <div className="text-center">Artículos</div>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem className="hoverFondoCeleste text-decoration-none p-0">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#005651" : "#2d3047",
                        textDecoration: "none",
                        fontWeight: isActive ? "600" : "500",
                        fontSize: isActive ? 20 : 18,
                      })}
                      to="/contacto"
                    >
                      <div className="text-center ">Contacto</div>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="d-none d-md-flex col-5 justify-content-between align-items-center text-decoration-none">
              <NavLink className="text-decoration-none" to="/info">
                <div className="d-flex d-lg-block flex-column blanco hoverAmarillo">
                  Información <span>Profesional</span> 
                </div>
              </NavLink>
              <NavLink className="text-decoration-none" to="/articles">
                <div className="blanco hoverAmarillo" >Artículos</div>
              </NavLink>
              <NavLink className="text-decoration-none">
                <div className="blanco hoverAmarillo">Contacto</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
