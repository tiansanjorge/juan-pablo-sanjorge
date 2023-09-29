import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  return (
    <header className="">
      <div class="container d-flex">
        <a class="text-decoration-none text-dark" href="index.html">
          <h1>Juan Pablo Sanjorge</h1>
        </a>

        <div class="d-none d-lg-flex justify-content-evenly col-10 text-decoration-none">
          <a class="text-decoration-none blanco" href="#">
            Home
          </a>
          <a
            class="text-decoration-none hovShake gris"
            href="pages/education.html"
          >
            Education
          </a>
          <a
            class="text-decoration-none hovShake gris"
            href="pages/experience.html"
          >
            Experience
          </a>
          <a
            class="text-decoration-none hovShake gris"
            href="pages/contact.html"
          >
            Contact
          </a>
        </div>

        {/* aca va el dropdown de bootstrap como en argentech (categorias) */}
        <FontAwesomeIcon icon={faBars} className="gris" />
      </div>
    </header>
  );
};
