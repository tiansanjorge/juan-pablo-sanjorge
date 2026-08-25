import { BsWhatsapp } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { Reveal } from "../components/Reveal";

export const Info = () => {
  return (
    <main className="topFiller">
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

      <section className="container-fluid section-glow py-5">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <Reveal>
              <span className="badge-pill mb-3 d-inline-block">
                Información Profesional
              </span>
              <h1 className="section-title mb-4">Formación y trayectoria</h1>

              <ul className="info-list mb-4">
                <li>Licenciado en Psicología</li>
                <li>Universidad de Buenos Aires — M. 66123</li>
                <li>Más de 10 años de experiencia en atención clínica</li>
                <li>Especializado en Adultos y Tercera Edad</li>
                <li>Socio adherente de APOLa</li>
              </ul>

              <img
                className="uba-seal"
                src="/img/logo-uba.png"
                alt="Universidad de Buenos Aires"
              />
            </Reveal>
          </div>

          <div className="col-12 col-lg-7 order-1 order-lg-2">
            <Reveal delay={0.15}>
              <img
                className="hero-portrait"
                src="/img/perfil.jpg"
                alt="Juan Pablo Sanjorge"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="enfoque" className="py-5">
        <div className="container-fluid">
          <Reveal className="col-11 col-md-9 col-lg-7 mx-auto">
            <span className="badge-pill mb-3 d-inline-block">
              Mi enfoque
            </span>
            <p className="enfoque-statement mb-4">
              Escuchar es solo el comienzo.{" "}
              <mark>
                Deconstruir lo que parece dado y construir nuevas formas de
                interpretar lo que nos sucede
              </mark>{" "}
              es el horizonte.
            </p>
            <div className="enfoque-body">
              <p className="mb-3">
                Mi práctica clínica se sostiene en una formación permanente y
                en un trabajo cuidadoso y particular sobre cada tratamiento.
                Además de lo que sucede durante las sesiones, dedico tiempo a
                revisar, estudiar y elaborar el material de cada caso,
                buscando comprender qué está ocurriendo y qué orientación
                puede resultar más adecuada para ese tratamiento.
              </p>
              <p className="m-0">
                No trabajo con respuestas prefabricadas. Cada tratamiento
                requiere una escucha atenta, una reflexión sostenida y una
                forma de abordaje acorde con aquello que lleva a cada persona
                a consultar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-gradient py-5">
        <div className="container-fluid">
          <Reveal className="col-11 col-md-9 col-lg-7 mx-auto card-surface text-center">
            <h2 className="section-title mb-3">
              Tu tranquilidad es mi prioridad
            </h2>
            <p className="hero-lead mb-3">
              Por eso, quiero que tengas la seguridad de que estás en manos de
              un profesional habilitado para acompañarte.
            </p>
            <p className="hero-lead mb-3">
              Podés confirmar mi matrícula activa en el{" "}
              <a
                className="link-primary"
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

      <section className="section-gradient-subtle py-5">
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
        className="whatsapp text-decoration-none rounded subtitulo2 shadow"
        href="https://wa.link/7staf4"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp className="h3" /> Enviar WhatsApp
      </a>
    </main>
  );
};

export default Info;
