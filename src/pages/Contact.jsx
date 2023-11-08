import { BsWhatsapp, BsFillEnvelopeFill } from "react-icons/bs";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export const Contact = () => {
  const [mensaje, setMensaje] = useState("Saludos, quisiera coordinar una entrevista.");

  function enviarMensaje() {
    let mensajeEncoded = encodeURIComponent(mensaje);
    let numeroTelefono = "5491122653526";
    let enlaceWhatsApp =
      "https://api.whatsapp.com/send?phone=" +
      numeroTelefono +
      "&text=" +
      mensajeEncoded;
    window.open(enlaceWhatsApp, "_blank");
  }

  return (
    <div className="topFiller">
      <Helmet>
        <meta name="title" content="Contactar a Juan Pablo Sanjorge"/>
        <meta name="description" content="Juan Pablo Sanjorge, licenciado en psicologia (UBA). Telefono: +54 9 11 2265-3526 mail: jpsanjorge@gmail.com" />
      </Helmet>
      <div className="container-fluid">
        <div className="row fondoVerdeC">
          {/* Formato XS a SM (360 a 768px) */}
          <div className="col-12 p-0 contacto d-flex d-md-none flex-column">
            <div className="col-11 mx-auto d-flex flex-column azul shadow mt-3">
              <div className="">
                <div className="d-flex justify-content-between text-start">
                  <div className="col-12 fondoVerdeC pt-3 pb-1 text-center">
                    <h1 className="verdeO titulo weight600 mb-0 mx-2">PRIMERA ENTREVISTA SIN CARGO</h1>
                  </div>
                </div>
                <div className="fondoVerdeC">
                  <form>
                    <div className="mx-4 py-3">
                      <textarea
                        className="form-control textareaFijo py-2 mb-4 size18 azul"
                        id="mensaje2"
                        rows="5"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                      ></textarea>
                      <button
                        className="whatsapp2 text-decoration-none rounded subtitulo2 border-0 mb-1"
                        type="button"
                        id="enviar"
                        onClick={enviarMensaje}
                      >
                        <BsWhatsapp /> Enviar Whatsapp
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="col-11 d-flex flex-column justify-content-between azul mx-auto">
                <div className="col-sm-5 d-flex flex-column justify-content-evenly align-self-start align-self-sm-end mt-4 mt-sm-5">

                    <p className="size19">
                      <b>
                        • Sesiones a distancia <br />• Sesiones presenciales
                        <br />
                      </b>
                    </p>
                    <a
                      className="size14 text-decoration-none azul hoverVerdeC ms-3"
                      href="#footer"
                    >
                      Consultorio en Olivos (Bs. As.)
                    </a>
                </div>
                <div className="col-sm-5 d-flex flex-column justify-content-evenly align-self-end mt-4 mt-sm-5">
                    <a
                      className="text-decoration-none verdeO hoverVerdeC"
                      href="https://wa.link/7staf4"
                      target="_blank"
                    >
                      <BsWhatsapp className="me-2" /> +54 9 11 2265-3526
                    </a>
                    <a
                      className="text-decoration-none verdeO hoverVerdeC mt-2"
                      href="mailto:jpsanjorge@gmail.com"
                      target="_blank"
                    >
                      <BsFillEnvelopeFill className="me-2" /> jpsanjorge@gmail.com
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formato MD o superior (768px en adelante) */}

          <div className="col-12 p-0 contacto d-none d-md-flex flex-column justify-content-evenly">
            <div className="col-7 col-lg-7 col-xl-6 col-xxl-5 offset-xl-1 d-flex flex-column azul">
              <div className="ms-md-4 ms-lg-5 ms-xl-0 shadow">
                <div className="d-flex justify-content-between text-start">
                  <div className="col-12 fondoVerdeC pt-3 pb-1 text-center">
                    <h1 className="subtitulo verdeO weight600">PRIMERA ENTREVISTA SIN CARGO</h1>
                  </div>
                </div>
                <div className="fondoVerdeC">
                  <form>
                    <div className="mx-4 py-3 px-3">
                      <textarea
                        className="form-control textareaFijo py-2 mb-4 size18 azul"
                        id="mensaje2"
                        rows="5"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                      ></textarea>
                      <button
                        className="whatsapp2 text-decoration-none rounded subtitulo2 border-0 mb-1"
                        type="button"
                        id="enviar"
                        onClick={enviarMensaje}
                      >
                        <BsWhatsapp /> Enviar Whatsapp
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="ms-5 ms-xl-0">
                <div className="col-10 col-lg-9 col-xl-7 col-xxl-6 offset-xl-1  d-flex justify-content-between justify-content-lg-around justify-content-xl-between azul">
                  <div className="d-flex flex-column justify-content-evenly align-self-start ps-3">
                    <h2 className="subtitulo lh-base">
                      <b>
                        • Sesiones a distancia <br />• Sesiones presenciales
                      </b>
                      <br />
                    </h2>
                    <a
                      className="size18 text-decoration-none azul hoverVerdeC ms-3"
                      href="#footer"
                    >
                      Consultorio en Olivos (Bs. As.)
                    </a>
                  </div>
                  <div className="d-flex flex-column justify-content-evenly align-self-start">
                    <a
                      className="subtitulo text-decoration-none verdeO hoverVerdeC"
                      href="https://wa.link/7staf4"
                      target="_blank"
                    >
                      <BsWhatsapp className="me-2" /> +54 9 11 2265-3526
                    </a>
                    <a
                      className="subtitulo text-decoration-none verdeO hoverVerdeC mt-2"
                      href="mailto:jpsanjorge@gmail.com"
                      target="_blank"
                    >
                      <BsFillEnvelopeFill className="me-3" />
                      jpsanjorge@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
