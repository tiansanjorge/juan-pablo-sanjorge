import { useParams } from "react-router-dom";
import ArticlesArray from "../components/Article";
import { Helmet } from "react-helmet-async";


export const Detail = () => {
  const { articleId } = useParams();

  const article = ArticlesArray.find(
    (article) =>
      article.titulo
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "") === articleId
  );
  console.log(article);

  if (!article) {
    return <div>
      <Helmet>
        <meta name="title" content="Articulos de Juan Pablo Sanjorge"/>
        <meta name="description" content="Juan Pablo Sanjorge, licenciado en psicologia (UBA). Articulos: ¿Para qué un psicoanálisis?; La terapia a distancia; El diagnóstico en psicología" />
      </Helmet>
      Artículo no encontrado</div>;
  }

  return (
    <div className="topFiller">
      <Helmet>
        <meta name="title" content="Articulos de Juan Pablo Sanjorge"/>
        <meta name="description" content={`Juan Pablo Sanjorge, licenciado en psicologia (UBA). Articulo: ${article.titulo}`} />
      </Helmet>
      <div className="container-fluid">
        <div className="row fondoAzul">
          <div className="col-12 pt-5 pb-4">
            <div className="col-10 col-md-8 mx-auto">
              <h2 className="titulo blanco mb-3">{article.titulo.toUpperCase()}</h2>
              <div className="divisorAmarillo col-4 col-md-3 ms-3"></div>
              <p className="subtitulo2 celeste text-end mt-5">{article.fecha}</p>
            </div>
          </div>
          <div className="col-12 fondoVerdeC py-5">
            <div
              className="col-10 col-md-8 mx-auto azul subtitulo2"
              dangerouslySetInnerHTML={{ __html: article.contenido }}
            />
            <p className="col-10 col-md-8 mx-auto mt-3 azul subtitulo2 text-end"><b><i>{article.firma}</i></b></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
