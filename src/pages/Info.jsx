import { BsWhatsapp } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

export const Info = () => {
  return (
    <main className="topFiller">
      <Helmet>
        <meta name="title" content="Informacion Profesional" />
        <meta
          name="description"
          content="Juan Pablo Sanjorge, licenciado en Psicologia egresado Universidad de Buenos aires (M. 66123). Experiencia en clinica de adultos y adolescentes."
        />
      </Helmet>
      <section className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-center fondoVerdeO py-5">
            <div className="col-6 col-md-4 col-lg-3 mb-4 mb-md-0 me-0 me-md-5  align-self-center ">
              <img
                className="img-fluid rounded-circle shadow"
                src="img/perfil.jpg"
                alt="Juan Pablo Sanjorge"
              />
            </div>
            <div className="col-10 col-sm-9 col-md-6 col-lg-5 col-xxl-4 d-flex flex-column justify-content-evenly blanco px-0 mx-auto mx-md-0 ms-md-4">
              <h1 className="titulo p-0 m-0 blanco">Información Profesional</h1>
              <div className="divisorAmarillo col-3 mt-2 mt-xl-0 pb-3"></div>
              <h4 className="subtitulo2 m-0 weight400">
                • Licenciado en Psicología
              </h4>
              <h4 className="subtitulo2 m-0 weight400">
                • Universidad de Buenos Aires - M. 66123
              </h4>
              <h4 className="subtitulo2 m-0 weight400">
                • Experiencia en clínica de adolescentes y adultos.
              </h4>
              <h4 className="subtitulo2 m-0 weight400">• Socio adherente de APOLa.</h4>
            </div>
          </div>
          <div className="col-11 col-md-10 col-lg-7 d-flex justify-content-center mx-auto py-5">
            {/* <video className="img-fluid shadow" controls>
              <source src="/img/video.mp4" type="video/mp4" />
              Tu navegador no admite la reproducción de videos.
            </video> */}
            <img className="img-fluid shadow" src="/img/video.jpg" alt="video presentacion proximamente" />
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
