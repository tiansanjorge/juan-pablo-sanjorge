import { BsWhatsapp, BsFillEnvelopeFill, BsArrowUpShort } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="fondoVerdeO text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-10 d-flex flex-column justify-content-evenly align-items-center text-center mx-auto">
            <h2 className="text-white py-2 size40">Consultorio</h2>
            <div className="divisor col-1 py-2"></div>
            <div className="py-2">
              Av. Maipu 2845, 7° "C", Tel: (011) 4799-4333 <br />
              Vicente López, Buenos Aires, Argentina
            </div>
            <div className="col-3 d-flex justify-content-evenly text-white py-3 size20 ">
              <a
                className=" text-decoration-none hoverCeleste"
                href="https://wa.link/7staf4"
                target="_blank"
              >
                <BsWhatsapp />
              </a>
              <a
                className=" text-decoration-none hoverCeleste"
                href="mailto:jpsanjorge@gmail.com"
                target="_blank"
              >
                <BsFillEnvelopeFill />
              </a>
            </div>
            <div className="">
              <a
              
                className="text-decoration-none size40 weight600 hoverCeleste"
                href="#"
              >
                <BsArrowUpShort />
              </a>
            </div>
            <div className="size14">
              2023 Juan Pablo Sanjorge – Psicoanalista, Buenos Aires, Argentina.
              – Web Design:{" "}
              <span>
                <a
                  className=" hoverCeleste"
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
