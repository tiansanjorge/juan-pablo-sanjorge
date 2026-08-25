import ArticlesArray from "../components/Article";
import { ArticleCard } from "../components/ArticleCard";
import { Helmet } from "react-helmet-async";

export const Articles = () => {
  return (
    <main className="topFiller">
      <Helmet>
        <meta name="title" content="Artículos de Juan Pablo Sanjorge" />
        <meta
          name="description"
          content="Juan Pablo Sanjorge, licenciado en psicología (UBA). Artículos: ¿Para qué un psicoanálisis?; La terapia a distancia; El diagnóstico en psicología"
        />
      </Helmet>

      <section className="section-subtle py-5">
        <div className="container-fluid">
          <div className="col-11 col-md-10 col-xl-9 mx-auto">
            <span className="badge-pill mb-3 d-inline-block">Artículos</span>
            <h1 className="section-title mb-4">Todos los artículos</h1>

            <div className="row g-4">
              {ArticlesArray.map((articulo, index) => (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                  <ArticleCard articulo={articulo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid">
          <div className="col-11 col-md-8 col-lg-6 mx-auto quote-block">
            <img
              className="quote-author-photo"
              src="/img/lacan.jpg"
              alt="J. Lacan"
            />
            <p className="quote-text">“Amar es dar lo que no se tiene”</p>
            <p className="quote-author">— Jacques Lacan</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Articles;
