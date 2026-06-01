import { BsWhatsapp } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

export const Info = () => {
  return (
    <main className="topFiller d-flex flex-column justify-content-between">
      <Helmet>
        <meta name="title" content="Informacion Profesional" />
        <meta
          name="description"
          content="Juan Pablo Sanjorge, licenciado en Psicologia egresado Universidad de Buenos aires (M. 66123). Experiencia en clinica de adultos y adolescentes."
        />
      </Helmet>
      <section className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-center fondoVerdeC py-5">
            <div className="col-6 col-md-4 col-lg-3 mb-4 mb-md-0 me-0 me-md-5  align-self-center ">
              <img
                className="img-fluid rounded-circle shadow"
                src="img/perfil.jpg"
                alt="Juan Pablo Sanjorge"
              />
            </div>
            <div className="col-10 col-sm-9 col-md-6 col-lg-5 col-xxl-4 d-flex flex-column justify-content-evenly azul px-0 mx-auto mx-md-0 ms-md-4">
              <h1 className="titulo p-0 m-0">Información Profesional</h1>
              <div className="divisorAmarillo col-3 mt-2 mt-xl-0 pb-3"></div>
              <h4 className="subtitulo2 m-md-0 weight400">
                • Licenciado en Psicología
              </h4>
              <h4 className="subtitulo2 m-md-0 weight400">
                • Universidad de Buenos Aires - M. 66123
              </h4>
              <h4 className="subtitulo2 m-md-0 weight400">
                • Experiencia en clínica de adolescentes y adultos.
              </h4>
              <h4 className="subtitulo2 m-md-0 weight400">
                • Socio adherente de APOLa.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="col-11 col-sm-10 col-md-9 col-xl-8 mb-5 me-0 pb-5 pt-4 px-5 gris fondoAzul">
              <p className=" titulo weight400 mb-4 mt-2">
                Tu tranquilidad es mi prioridad.
              </p>
              <p className="subtitulo2 weight400 mb-4">
                Por eso, quiero que tengas la seguridad de que estás en manos de
                un profesional habilitado para acompañarte.
              </p>
              <p className="subtitulo2 weight400 mb-4">
                Podés confirmar mi matrícula activa en el
                <a
                  className="verdeC hoverCeleste ms-1"
                  href="https://sisa.msal.gov.ar/sisa"
                  target="_blank"
                >
                  Buscador Nacional de Profesionales de la Salud del Ministerio
                  de Salud de la Nación.
                </a>
              </p>
              <p className=" subtitulo2 weight400">
                Además, si lo preferís, puedo enviarte mi Matrícula Digital
                oficial a través de la app Mi Argentina, que incluye un código
                QR para validar mi habilitación en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="col-12 d-flex justify-content-center fondoAzul blanco text-center py-4">
        <img
          className="col-2 col-md-1 rounded-circle img-fluid"
          src="img/freud.jpg"
          alt="S. Freud"
        />
        <p className="col-9 col-md-7 col-xl-6 my-auto ms-2 ms-md-4 subtitulo weight400">
          <i>“El yo no es dueño en su propia casa”.</i> - S. Freud
        </p>
      </div>

      <a
        className="whatsapp text-decoration-none rounded subtitulo2 shadow"
        href="https://wa.link/7staf4"
        target="_blank"
      >
        <BsWhatsapp className="h3" /> Enviar WhatsApp
      </a>
    </main>
  );
};
