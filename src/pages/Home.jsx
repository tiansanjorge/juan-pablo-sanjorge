import ImageSlider from "../components/ImageSlider";
import ArticlesArray from "../components/Article";
import { BsWhatsapp } from "react-icons/bs";

export const Home = () => {
  const slides = [
    {
      url: "/img/portadaDistancia.jpg",
      xlurl: "/img/portadaDistancia2.jpg",
      lgurl: "/img/portadaDistancia3.jpg",
      mdurl: "/img/portadaDistancia4.jpg",
      smurl: "/img/portadaDistancia5.jpg",
      xsurl: "/img/portadaDistancia6.jpg",
      title: "Terapia a Distancia",
    },
    {
      url: "/img/portadaJP.jpg",
      xlurl: "/img/portadaJP2.jpg",
      lgurl: "/img/portadaJP3.jpg",
      mdurl: "/img/portadaJP4.jpg",
      smurl: "/img/portadaJP5.jpg",
      xsurl: "/img/portadaJP6.jpg",
      title: "Psicologo Juan Pablo Sanjorge",
    },
  ];

  return (
    <main className="topFiller">
      <ImageSlider slides={slides}></ImageSlider>
      <div className="container ">
        <div className="row">
          <div className="col-12 d-flex flex-column flex-lg-row justify-content-evenly">
            <div className="col-12 col-lg-7 d-flex justify-content-center pt-5 pb-3 pb-lg-5">
              <video className="img-fluid shadow" controls>
                <source src="/img/video.mp4" type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
              </video>
            </div>
            <div className="col-12 col-lg-4 pb-3 pb-lg-0 pt-lg-5 ps-2 mt-lg-4 negro">
              <h1 className="titulo azul">
                <b>Lic. Juan Pablo Sanjorge</b>
              </h1>
              <h2 className="blanco mb-3 subtitulo">
                <i>Psicólogo</i>
              </h2>
              <p className="azul pt-3 m-0 subtitulo2">
                Universidad de Buenos Aires - M. 66123 <br />
                Especializado en clínica de adolescentes y adultos.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-12 fondoVerdeC py-4 pb-lg-5 d-flex flex-column justify-content-evenly">
        <div className="Col-10 d-flex flex-column d-lg-none justify-content-evenly pb-4">
          <h2 className="titulo text-center pt-4">Artículos</h2>
          <div className="divisor col-2 col-md-1 py-2 mx-auto"></div>
          {ArticlesArray.map((articulo, index) => (
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
          <h3 className="subtitulo verdeO pb-3 m-0">
            {ArticlesArray[0].titulo.toUpperCase()}
          </h3>
          <div className="divisor col-2 mb-4"></div>
          <p className="size18 azul pb-2">
            [...] ¿Para qué analizar la psiquis? Una primera respuesta es
            arrojada por el modo mismo en que el psicoanálisis nace en la
            sociedad: a raíz de que el malestar de ciertos pacientes que
            consultaban a sus médicos no podía ser explicado a través de sus
            conocimientos anatómicos, biológicos o neurológicos. Es importante
            tener en cuenta esto ya que nos permite ubicar que de lo que se
            trata es de una ausencia de saber o conocimiento: “¿por qué me pasa
            esto?”, “¿por qué no puedo evitar comportarme así?”, “¿cómo hago
            para lograr esto?”, “¿qué es lo que tengo que hacer?”. Son preguntas
            que quizás, aquel que se encuentre evaluando la posibilidad de
            buscar ayuda psicoterapéutica, pueda identificar con facilidad en
            sus propios razonamientos [...]
          </p>
          <div className="col-12 d-flex py-3">
            <a
              className="col-3 text-decoration-none fondoVerdeO hoverFondoAzul blanco text-center me-4 py-1"
              href="/articles/para-qu-un-psicoanlisis"
            >
              ARTICULO COMPLETO
            </a>
            <a
              className="col-3 text-decoration-none fondoVerdeO hoverFondoAzul blanco text-center py-1"
              href="/articles"
            >
              MÁS ARTICULOS
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 d-flex justify-content-center fondoAzul blanco text-center py-4">
        <img className="imgByN col-2 col-md-1 rounded-circle img-fluid" src="img/sartre.jpg" alt="J.P. Sartre"/>
        <h3 className="col-9 col-md-7 my-auto ms-2 ms-md-4 subtitulo weight400">
          <i className="" >“Cada quien es lo que hace con lo que hicieron de él”</i> - J.P.
          Sartre
        </h3>
      </div>

      <a
        className="whatsapp text-decoration-none rounded subtitulo2"
        href="https://wa.link/7staf4"
        target="_blank"
      >
        <BsWhatsapp className="h3" /> Enviar WhatsApp
      </a>
    </main>
  );
};
