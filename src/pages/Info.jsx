import { BsWhatsapp } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { Reveal } from "../components/Reveal";
import { EnfoqueContent } from "../components/EnfoqueContent";

export const Info = () => {
  return (
    <main>
      <Helmet>
        <title>Información Profesional | Lic. Juan Pablo Sanjorge</title>
        <meta name="title" content="Información Profesional" />
        <meta
          name="description"
          content="Juan Pablo Sanjorge, licenciado en Psicología egresado Universidad de Buenos Aires (M. 66123). Más de 10 años de experiencia en atención clínica, especializado en Adultos y Tercera Edad."
        />
        <link rel="canonical" href="https://psicologosanjorge.com.ar/info" />
        <meta
          property="og:title"
          content="Información Profesional | Lic. Juan Pablo Sanjorge"
        />
        <meta
          property="og:description"
          content="Formación, matrícula y trayectoria del Lic. Juan Pablo Sanjorge, psicólogo (UBA)."
        />
        <meta
          property="og:url"
          content="https://psicologosanjorge.com.ar/info"
        />
      </Helmet>

      <section className="hero-top-offset info-hero-section">
        <div className="info-hero-texture" aria-hidden="true">
          <div className="info-hero-dots"></div>
          <div className="info-hero-blob info-hero-blob-a"></div>
          <div className="info-hero-blob info-hero-blob-b"></div>
          <div className="info-hero-blob info-hero-blob-c"></div>
          <div className="info-hero-topshade"></div>
          <div className="info-hero-bottomfade"></div>
        </div>
        <div className="content-width">
          <div className="info-hero-panel">
            <div className="info-hero-photo">
              <Reveal delay={0.15}>
                <img src="/img/perfil.jpg" alt="Juan Pablo Sanjorge" />
              </Reveal>
            </div>

            <div className="info-hero-copy">
              <img
                className="uba-watermark"
                src="/img/logo-uba.png"
                alt=""
                aria-hidden="true"
              />
              <Reveal className="info-hero-copy-content">
                <span className="badge-pill mb-3 d-inline-block">
                  Información Profesional
                </span>
                <h1 className="section-title mb-4">
                  Formación y trayectoria
                </h1>

                <ul className="info-list">
                  <li>Licenciado en Psicología</li>
                  <li>Universidad de Buenos Aires — M. 66123</li>
                  <li>Más de 10 años de experiencia en atención clínica</li>
                  <li>Especializado en Adultos y Tercera Edad</li>
                  <li>Socio adherente de APOLa</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="enfoque" className="enfoque-section-info pt-5">
        <div className="container-fluid">
          <Reveal className="col-11 col-md-9 col-lg-7 mx-auto">
            <EnfoqueContent />
          </Reveal>
        </div>
      </section>

      <section className="section-gradient tranquilidad-section py-5">
        <div className="container-fluid">
          <Reveal className="col-11 col-md-9 col-lg-7 mx-auto card-surface card-surface-primary text-center">
            <h2 className="section-title mb-3">
              Tu tranquilidad es mi prioridad
            </h2>
            <div className="divisorAmarillo col-5 col-md-4 col-xl-2 mx-auto mb-5"></div>
            <p className="hero-lead mb-3">
              Por eso, quiero que tengas la seguridad de que estás en manos de
              un <strong>profesional habilitado</strong> para acompañarte.
            </p>
            <p className="hero-lead mb-3">
              Podés confirmar mi matrícula activa en el{" "}
              <a
                className="link-accent"
                href="https://sisa.msal.gov.ar/sisa"
                target="_blank"
                rel="noreferrer"
              >
                Buscador Nacional de Profesionales de la Salud del Ministerio
                de Salud de la Nación
              </a>
              .
            </p>
            <p className="hero-lead m-0">
              Además, si lo preferís, puedo enviarte mi Matrícula Digital
              oficial a través de la app Mi Argentina, que incluye un código
              QR para validar mi habilitación en tiempo real.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-navy py-5">
        <div className="container-fluid">
          <Reveal className="col-11 col-md-8 col-lg-6 mx-auto quote-block">
            <img
              className="quote-author-photo"
              src="/img/freud.jpg"
              alt="S. Freud"
            />
            <p className="quote-text">“El yo no es dueño en su propia casa”</p>
            <p className="quote-author">— Sigmund Freud</p>
          </Reveal>
        </div>
      </section>

      <a
        className="whatsapp-fab"
        href="https://wa.link/7staf4"
        target="_blank"
        rel="noreferrer"
        aria-label="Enviar WhatsApp"
      >
        <BsWhatsapp />
      </a>
    </main>
  );
};

export default Info;
