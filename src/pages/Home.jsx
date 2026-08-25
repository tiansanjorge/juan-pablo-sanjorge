import ArticlesArray from "../components/Article";
import { ArticleCard } from "../components/ArticleCard";
import { Reveal } from "../components/Reveal";
import { BsWhatsapp } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="topFiller">
      <Helmet>
        <meta name="title" content="Psicólogo Juan Pablo Sanjorge" />
        <meta
          name="description"
          content="El licenciado en psicología Juan Pablo Sanjorge egresado de la Universidad de Buenos Aires ofrece sesiones de terapia a distancia. Especializado en Adultos y Tercera Edad."
        />
        <link rel="canonical" href="https://psicologosanjorge.com.ar/" />
      </Helmet>

      <section className="container-fluid py-5">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <Reveal>
              <span className="badge-pill mb-3 d-inline-block">
                Psicoanálisis · Orientación lacaniana
              </span>
              <h1 className="hero-title mb-2">Lic. Juan Pablo Sanjorge</h1>
              <p className="hero-subtitle mb-4">Psicólogo</p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge-pill">Universidad de Buenos Aires</span>
                <span className="badge-pill">M. 66123</span>
                <span className="badge-pill">+10 años de experiencia</span>
                <span className="badge-pill">Adultos y Tercera Edad</span>
              </div>

              <p className="hero-lead mb-4">
                Sesiones a distancia · Primera entrevista sin cargo
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn-pill btn-pill-primary">
                  Reservar primera consulta
                </Link>
                <a
                  className="btn-pill btn-pill-outline"
                  href="https://wa.link/7staf4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp /> WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <Reveal delay={0.15}>
              <img
                className="hero-portrait"
                src="/img/perfil.jpg"
                alt="Juan Pablo Sanjorge, psicólogo"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-4 py-lg-5">
        <div className="container-fluid d-flex justify-content-center">
          <Reveal className="video-vertical-frame">
            <video controls>
              <source src="/img/video.mp4" type="video/mp4" />
              Tu navegador no admite la reproducción de videos.
            </video>
          </Reveal>
        </div>
      </section>

      <section className="section-subtle py-5">
        <div className="container-fluid">
          <div className="col-11 col-md-10 col-xl-9 mx-auto">
            <Reveal>
              <span className="badge-pill mb-3 d-inline-block">
                Artículos
              </span>
              <h2 className="section-title mb-4">Reflexiones y escritos</h2>
            </Reveal>

            <div className="row g-4">
              {ArticlesArray.map((articulo, index) => (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                  <Reveal delay={index * 0.08}>
                    <ArticleCard articulo={articulo} />
                  </Reveal>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/articles" className="btn-pill btn-pill-outline">
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-subtle py-5">
        <div className="container-fluid">
          <Reveal className="col-11 col-md-8 col-lg-6 mx-auto quote-block">
            <img
              className="quote-author-photo"
              src="/img/sartre.jpg"
              alt="J.P. Sartre"
            />
            <p className="quote-text">
              “Cada quien es lo que hace con lo que hicieron de él”
            </p>
            <p className="quote-author">— Jean-Paul Sartre</p>
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
