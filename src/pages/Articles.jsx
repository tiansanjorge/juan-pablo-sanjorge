import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticlesArray from "../components/Article";
import { ArticleCard } from "../components/ArticleCard";
import { Reveal } from "../components/Reveal";
import { Helmet } from "react-helmet-async";
import { slugify } from "../utils/slug";

export const Articles = () => {
  const [searchParams] = useSearchParams();
  const requestedSlug = searchParams.get("articulo");
  const requestedArticle = ArticlesArray.find(
    (articulo) => slugify(articulo.titulo) === requestedSlug
  );

  const [selectedArticle, setSelectedArticle] = useState(
    requestedArticle || ArticlesArray[0]
  );

  const detailRef = useRef(null);

  useEffect(() => {
    if (requestedArticle) {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="topFiller articles-hero-fill">
      <Helmet>
        <title>Artículos | Lic. Juan Pablo Sanjorge</title>
        <meta name="title" content="Artículos de Juan Pablo Sanjorge" />
        <meta
          name="description"
          content="Juan Pablo Sanjorge, licenciado en psicología (UBA). Artículos: ¿Para qué un psicoanálisis?; La terapia a distancia; El diagnóstico en psicología"
        />
        <link
          rel="canonical"
          href="https://psicologosanjorge.com.ar/articles"
        />
        <meta
          property="og:title"
          content="Artículos | Lic. Juan Pablo Sanjorge"
        />
        <meta
          property="og:description"
          content="Reflexiones y escritos sobre psicoanálisis, terapia a distancia y diagnóstico en psicología."
        />
        <meta
          property="og:url"
          content="https://psicologosanjorge.com.ar/articles"
        />
      </Helmet>

      <section className="section-primary py-5">
        <div className="container-fluid">
          <div className="col-11 col-md-10 col-xl-9 mx-auto">
            <Reveal onLoad>
              <span className="badge-pill mb-3 d-inline-block">
                Artículos
              </span>
              <h1 className="section-title mb-4">Todos los artículos</h1>
            </Reveal>

            <div className="row g-4 mb-5">
              {ArticlesArray.map((articulo, index) => (
                <div
                  className="col-12 col-md-6 col-lg-3"
                  key={slugify(articulo.titulo)}
                >
                  <Reveal onLoad delay={index * 0.08} className="h-100">
                    <ArticleCard
                      articulo={articulo}
                      isActive={articulo === selectedArticle}
                      onSelect={() => setSelectedArticle(articulo)}
                    />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={detailRef} className="section-subtle section-wave-top py-5">
        <div className="section-wave section-wave--subtle" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,48L80,45.3C160,43,320,37,480,48C640,59,800,85,960,90.7C1120,96,1280,80,1360,72L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
        <div className="container-fluid">
          <div className="col-11 col-md-10 col-xl-9 mx-auto">
            <Reveal onLoad key={slugify(selectedArticle.titulo)}>
              <span className="badge-pill badge-pill-contrast mb-3 d-inline-block">
                {selectedArticle.fecha}
              </span>
              <h2 className="section-title mb-4">{selectedArticle.titulo}</h2>

              <div
                className="card-surface article-body"
                dangerouslySetInnerHTML={{ __html: selectedArticle.contenido }}
              />
              <p className="article-signature mt-4">
                <b>{selectedArticle.firma}</b>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-navy py-5">
        <div className="container-fluid">
          <Reveal className="col-11 col-md-8 col-lg-6 mx-auto quote-block">
            <img
              className="quote-author-photo"
              src="/img/lacan.jpg"
              alt="J. Lacan"
            />
            <p className="quote-text">“Amar es dar lo que no se tiene”</p>
            <p className="quote-author">— Jacques Lacan</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Articles;
