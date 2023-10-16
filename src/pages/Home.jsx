import ImageSlider from "../components/ImageSlider";
import Articles from "../components/Article";
import { BsWhatsapp } from "react-icons/bs";

export const Home = () => {
  const slides = [
    {
      url: "/img/celuH1.jpg",
      smUrl: "/img/celuH1_sm.jpg",
      title: "Artech • Tecnología al Alcance",
    },
    {
      url: "/img/celuH2.jpg",
      smUrl: "/img/celuH2_sm.jpg",
      title: "Celulares en Artech",
      href: "#",
    },
  ];

  return (
    <main className="home">
      <ImageSlider slides={slides}></ImageSlider>
      <div className="container ">
        <div className="row">
          <div className="col-12 d-flex flex-column flex-lg-row justify-content-evenly py-lg-3">
            <div className="col-12 col-lg-7 d-flex justify-content-center pt-5 pb-3 pb-lg-5">
              <video className="img-fluid" controls>
                <source src="/img/video.mp4" type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
              </video>
            </div>
            <div className="col-12 col-lg-4 pb-5 pb-lg-0 pt-lg-5 ps-2 mt-lg-4 negro">
              <h1 className="titulo azul">
                <b>Lic. Juan Pablo Sanjorge</b>
              </h1>
              <h2 className="blanco mb-0 subtitulo">
                <i>Psicoanalista</i>
              </h2>
              <p className="azul pt-3 m-0 subtitulo2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro recusandae corporis dolores, dignissimos veritatis? Provident praesentium soluta repellat. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 fondoVerdeO blanco text-center py-4">
        <h3 className="my-0 mx-3 subtitulo weight400">
          <i>“Cada hombre es lo que hace con lo que hicieron de él”</i> - J.P.
          Sartre
        </h3>
      </div>
      <div className="col-12 fondoVerdeC py-3 py-lg-5 d-flex flex-column justify-content-evenly">
        <div className="col-10 mx-auto azul">
          <h2 className="titulo text-center pt-4">Artículos</h2>
          <div className="divisor col-2 col-md-1 py-2 mx-auto"></div>
        </div>
        <div className="Col-10 d-flex flex-column d-lg-none justify-content-evenly pt-3 pb-4">
          {Articles.map((articulo, index) => (
            <a
              className="col-10 col-md-7 d-flex flex-column justify-content-between fondoAzul blanco hoverFondoVerdeO p-4 text-decoration-none pointer mx-auto my-3"
              href="#"
              key={index}
            >
              <h3 className="subtitulo pt-2 pb-5">
                {articulo.titulo.toUpperCase()}
              </h3>
              <p className="celeste text-start pt-2 m-0">{articulo.fecha}</p>
            </a>
          ))}
        </div>
        <div className="col-10 d-none d-lg-flex flex-column justify-content-between mx-auto pb-4">
          <h3 className="subtitulo azul py-3">
            {Articles[0].titulo.toUpperCase()}
          </h3>
          <p className="size18">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus molestiae at, soluta delectus odit molestias. Error
            laborum, voluptates odio dolorum reiciendis eius reprehenderit
            voluptas ducimus repellendus optio quaerat iste earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque officiis, vitae, eum tempore beatae ullam sunt architecto saepe quos obcaecati sed, magni accusantium maxime quo sapiente esse sint commodi.
          </p>
          <div className="col-12 d-flex py-3">
            <a
              className="col-3 text-decoration-none fondoAzul hoverFondoAmarillo blanco hoverAzul text-center me-4 py-1"
              href="#"
            >
              ARTICULO COMPLETO
            </a>
            <a
              className="col-3 text-decoration-none fondoAzul hoverFondoAmarillo blanco hoverAzul text-center py-1"
              href="#"
            >
              MÁS ARTICULOS
            </a>
          </div>
        </div>
      </div>
      <a
        className="whatsapp text-decoration-none rounded subtitulo2"
        href="https://wa.link/7staf4"
        target="_blank"
      >Enviar WhatsApp <BsWhatsapp className="h3"/> </a>
    </main>
  );
};
