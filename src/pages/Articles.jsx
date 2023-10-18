import { BsWhatsapp } from "react-icons/bs";
import ArticlesArray from "../components/Article";

export const Articles = () => {
  return (
    <main className="articles">
      <section className="container-fluid">
        <div className="row">
          <div className="col-12 fondoVerdeC d-flex flex-column justify-content-evenly py-3 py-lg-5 px-0">
            <div className="col-10 mx-auto azul">
              <h2 className="titulo text-center pt-4">Artículos</h2>
              <div className="divisor col-2 col-md-1 py-2 mx-auto"></div>
            </div>
            <div className="Col-10 d-flex flex-column justify-content-evenly pt-3 pb-4">
              {ArticlesArray.map((articulo, index) => (
                <a
                  className="col-10 col-md-7 d-flex flex-column justify-content-between fondoAzul blanco hoverFondoVerdeO p-4 text-decoration-none pointer mx-auto my-3"
                  href="#"
                  key={index}
                >
                  <h3 className="subtitulo pt-2 pb-5">
                    {articulo.titulo.toUpperCase()}
                  </h3>
                  <p className="celeste text-start pt-2 m-0">
                    {articulo.fecha}
                  </p>
                </a>
              ))}
            </div>
            <div className="col-12 fondoVerdeO blanco text-center py-4">
              <h3 className="my-0 mx-3 subtitulo weight400">
                <i>“El yo no es dueño en su propia casa”.</i> - S. Freud
              </h3>
            </div>
          </div>
        </div>
      </section>

      <a
        className="whatsapp text-decoration-none rounded subtitulo2"
        href="https://wa.link/7staf4"
        target="_blank"
      >
        Enviar WhatsApp <BsWhatsapp className="h3" />{" "}
      </a>
    </main>
  );
};
