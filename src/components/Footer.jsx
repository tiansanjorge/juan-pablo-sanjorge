import { BsWhatsapp, BsFillEnvelopeFill, BsArrowUpShort } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="fondoVerdeO blanco pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-10 d-flex flex-column justify-content-evenly align-items-center text-center mx-auto">
            <h2 className="blanco pt-2 titulo">Consultorio</h2>
            <div className="divisor col-3 col-md-2 col-xl-1 py-2"></div>
            <div className="py-2 subtitulo2">
              F. Felix de Amador 1805 Dpto. 6, Tel: 11 2265-3526 <br />
              Olivos, Buenos Aires, Argentina
            </div>
            <div className="col-3 d-flex justify-content-evenly blanco py-3 size20 ">
              <a
                className="text-decoration-none blanco hoverAmarillo"
                href="https://wa.link/7staf4"
                target="_blank"
              >
                <BsWhatsapp />
              </a>
              <a
                className="text-decoration-none blanco hoverAmarillo"
                href="mailto:jpsanjorge@gmail.com"
                target="_blank"
              >
                <BsFillEnvelopeFill />
              </a>
            </div>
            <div className="">
              <a
              
                className="text-decoration-none size40 weight600 blanco hoverAmarillo"
                href="#"
              >
                <BsArrowUpShort />
              </a>
            </div>
            <div className="size14">
              2023 Juan Pablo Sanjorge - Psicoanalista, Buenos Aires, Argentina.
              - Web Design:{" "}
              <span>
                <a
                  className="blanco hoverAmarillo"
                  href="https://ssanjorge.netlify.com"
                  target="_blank"
                >
                  Sebastián Sanjorge
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
