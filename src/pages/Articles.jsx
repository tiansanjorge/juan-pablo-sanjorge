import { BsWhatsapp } from "react-icons/bs";
import ArticlesArray from "../components/Article";
import { Link } from "react-router-dom";

export const Articles = () => {
  return (
    <main className="topFiller">
      <section className="container-fluid">
        <div className="row">
          <div className="col-12 fondoVerdeC d-flex flex-column justify-content-evenly pt-3 px-0">
            <div className="col-10 mx-auto azul">
              <h2 className="titulo text-center pt-4">Artículos</h2>
              <div className="divisor col-2 col-md-1 py-2 mx-auto"></div>
            </div>

            <div className="Col-10 d-flex flex-column justify-content-evenly pt-3 pb-5">
              {ArticlesArray.map((articulo, index) => {
                const articleId = articulo.titulo
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-zA-Z0-9-]/g, "");

                return (
                  <Link
                    className="text-decoration-none"
                    to={`/articles/${articleId}`}
                    key={index}
                  >
                    <div className="col-10 col-md-7 d-flex flex-column justify-content-between fondoAzul blanco hoverFondoVerdeO p-4 text-decoration-none pointer mx-auto my-3">
                      <h3 className="subtitulo pt-2 pb-5">
                        {articulo.titulo.toUpperCase()}
                      </h3>
                      <p className="celeste text-start pt-2 m-0">
                        {articulo.fecha}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="col-12 d-flex justify-content-center fondoAzul blanco text-center py-4">
              <img
                className="col-2 col-md-1 rounded-circle img-fluid"
                src="img/lacan.jpg"
                alt="J. Lacan"
              />
              <h3 className="col-9 col-md-7 my-auto ms-2 ms-md-4 subtitulo weight400">
              <i>“Amar es dar lo que no se tiene” </i> – J. Lacan
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
