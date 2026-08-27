import ArticlesArray from "../components/Article";
import { ArticleCard } from "../components/ArticleCard";
import { Reveal } from "../components/Reveal";
import { Marquee } from "../components/Marquee";
import { Accordion } from "../components/Accordion";
import { EnfoqueContent } from "../components/EnfoqueContent";
import FaqArray from "../components/Faq";
import { BsWhatsapp, BsPlayFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const malestares = [
  "Problemas de autoestima o autoconfianza",
  "Inhibición social",
  "Problemas vinculares",
  "Desarrollo personal",
  "Ataques de pánico",
  "Ansiedad",
  "Depresión",
  "Autoconocimiento",
  "Dificultades para dormir",
  "Dificultades para poner límites",
  "Inseguridad",
  "Miedos y preocupaciones",
  "Estrés",
  "Angustia",
  "Toma de decisiones",
  "Crisis personales",
  "Procrastinación",
  "Problemas laborales",
  "Dificultades para adaptarse a cambios",
  "Malestar emocional",
];

export const Home = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main>
      <Helmet>
        <title>Lic. Juan Pablo Sanjorge | Psicólogo</title>
        <meta name="title" content="Psicólogo Juan Pablo Sanjorge" />
        <meta
          name="description"
          content="El licenciado en psicología Juan Pablo Sanjorge egresado de la Universidad de Buenos Aires ofrece sesiones de terapia a distancia. Especializado en Adultos y Tercera Edad."
        />
        <link rel="canonical" href="https://psicologosanjorge.com.ar/" />
        <meta property="og:title" content="Lic. Juan Pablo Sanjorge | Psicólogo" />
        <meta
          property="og:description"
          content="Sesiones de terapia a distancia. Especializado en Adultos y Tercera Edad. Universidad de Buenos Aires - M. 66123."
        />
        <meta property="og:url" content="https://psicologosanjorge.com.ar/" />
      </Helmet>

      <section className="hero-banner hero-top-offset">
        <div className="container-fluid">
          <div className="hero-banner-content row">
            <div className="col-12 col-lg-6 offset-lg-1">
              <Reveal className="hero-banner-copy">
                <h1 className="hero-title mb-2">Lic. Juan Pablo Sanjorge</h1>
                <p className="hero-subtitle mb-4">Psicólogo Clínico</p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge-pill d-md-none">UBA</span>
                  <span className="badge-pill d-none d-md-inline">
                    Universidad de Buenos Aires
                  </span>
                  <span className="badge-pill">M. 66123</span>
                  <span className="badge-pill d-md-none">+10 años de exp.</span>
                  <span className="badge-pill d-none d-md-inline">
                    +10 años de experiencia
                  </span>
                  <span className="badge-pill">Adultos y Tercera Edad</span>
                </div>

                <p className="hero-lead mb-4">
                  Sesiones a distancia ·{" "}
                  <strong>Primera entrevista sin cargo</strong>
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
                    <BsWhatsapp />
                    <span className="d-none d-sm-inline"> WhatsApp</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={malestares} />

      <section className="enfoque-section">
        <div className="content-width">
          <div className="row align-items-center g-0">
            <div className="col-12 col-lg-5">
              <Reveal className="d-flex justify-content-center justify-content-lg-start">
                <div className="video-vertical-frame">
                  <video
                    ref={videoRef}
                    controls
                    preload="metadata"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src="/img/video.mp4" type="video/mp4" />
                    Tu navegador no admite la reproducción de videos.
                  </video>
                  {!isVideoPlaying && (
                    <button
                      type="button"
                      className="video-play-button"
                      onClick={() => videoRef.current?.play()}
                      aria-label="Reproducir video"
                    >
                      <BsPlayFill />
                    </button>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="col-12 col-lg-7">
              <Reveal delay={0.15}>
                <div className="d-lg-none">
                  <p className="bio-statement mb-4">
                    Escuchar es solo el comienzo.
                    <mark>
                      Deconstruir lo que parece dado y construir nuevas
                      formas de interpretar lo que nos sucede
                    </mark>{" "}
                    es el horizonte.
                  </p>
                  <Link to="/info#enfoque" className="link-accent">
                    Conocé más sobre mi enfoque →
                  </Link>
                </div>
                <div className="d-none d-lg-block">
                  <EnfoqueContent />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-primary section-wave-top faq-section">
        <div className="section-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,72C160,80,320,96,480,90.7C640,85,800,59,960,48C1120,37,1280,43,1360,45.3L1440,48L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
        <div className="container-fluid">
          <Reveal className="col-11 col-md-9 col-lg-7 mx-auto">
            <span className="badge-pill badge-pill-lg mb-3 d-inline-block">
              Preguntas frecuentes
            </span>
            <h2 className="section-title mb-4">
              Antes de tu primera consulta
            </h2>
            <Accordion items={FaqArray} />
          </Reveal>
        </div>
      </section>

      <section className="section-subtle section-wave-top py-5">
        <div className="section-wave section-wave--subtle" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,48L80,45.3C160,43,320,37,480,48C640,59,800,85,960,90.7C1120,96,1280,80,1360,72L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
        <div className="container-fluid">
          <div className="col-11 col-md-10 col-xl-9 mx-auto">
            <Reveal>
              <span className="badge-pill badge-pill-subtle-dark mb-3 d-inline-block">
                Artículos
              </span>
              <h2 className="section-title mb-4">Reflexiones y escritos</h2>
            </Reveal>

            <div className="row g-4 article-cards-flat">
              {ArticlesArray.map((articulo, index) => (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                  <Reveal delay={index * 0.08} className="h-100">
                    <ArticleCard articulo={articulo} />
                  </Reveal>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link
                to="/articles"
                className="btn-pill btn-pill-outline"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-navy py-5">
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
    </main>
  );
};
