import {
  BsWhatsapp,
  BsFillEnvelopeFill,
  BsCheckSquareFill,
  BsInstagram,
} from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Reveal } from "../components/Reveal";

export const Contact = () => {
  const form = useRef();

  const phoneRegEx = /^\+?[1-9][0-9]{7,14}$/;
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [inputPhone, setInputPhone] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputInquiry, setInputInquiry] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Cargo del localStorage los valores de los inputs
  useEffect(() => {
    const storedPhone = localStorage.getItem("phone");
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedInquiry = localStorage.getItem("inquiry");
    const storedMessage = localStorage.getItem("message");

    if (storedPhone) {
      setInputPhone(JSON.parse(storedPhone));
      validatePhone(JSON.parse(storedPhone));
    }

    if (storedName) {
      setInputName(JSON.parse(storedName));
    }

    if (storedEmail) {
      setInputEmail(JSON.parse(storedEmail));
      validateEmail(JSON.parse(storedEmail));
    }

    if (storedInquiry) {
      setInputInquiry(JSON.parse(storedInquiry));
    }

    if (storedMessage) {
      setInputMessage(JSON.parse(storedMessage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // funcion para guardar el valor de los input en localStorage
  const storeInputPhone = (valor) => {
    setInputPhone(valor);
    localStorage.setItem("phone", JSON.stringify(valor));
  };
  const storeInputName = (valor) => {
    setInputName(valor);
    localStorage.setItem("name", JSON.stringify(valor));
  };
  const storeInputEmail = (valor) => {
    setInputEmail(valor);
    localStorage.setItem("email", JSON.stringify(valor));
  };
  const storeInputInquiry = (valor) => {
    setInputInquiry(valor);
    localStorage.setItem("inquiry", JSON.stringify(valor));
  };
  const storeInputMessage = (valor) => {
    setInputMessage(valor);
    localStorage.setItem("message", JSON.stringify(valor));
  };

  // Funcion para validar el valor phone con el RegEx de telefono declarado previamente ("phoneRegEx")
  const validatePhone = (value) => {
    if (value === "" || String(value).toLowerCase().match(phoneRegEx)) {
      setPhoneError("");
    } else {
      setPhoneError("Teléfono inválido");
    }
  };

  // Funcion para validar el valor email con el RegEx de email declarado previamente ("EmailRegEx")
  const validateEmail = (value) => {
    if (value === "" || String(value).toLowerCase().match(emailRegEx)) {
      setEmailError("");
    } else {
      setEmailError("Correo electrónico inválido");
    }
  };

  // Valida los campos obligatorios al enviar el form. Devuelve el id del primer campo con error, o null si no hay errores
  const validateRequiredFields = () => {
    let firstErrorId = null;

    if (inputName.trim() === "") {
      setNameError("El nombre es obligatorio");
      firstErrorId = firstErrorId ?? "name";
    } else {
      setNameError("");
    }

    if (inputEmail.trim() === "") {
      setEmailError("El correo electrónico es obligatorio");
      firstErrorId = firstErrorId ?? "email";
    } else if (!String(inputEmail).toLowerCase().match(emailRegEx)) {
      setEmailError("Correo electrónico inválido");
      firstErrorId = firstErrorId ?? "email";
    } else {
      setEmailError("");
    }

    if (inputPhone.trim() === "") {
      setPhoneError("El teléfono es obligatorio");
      firstErrorId = firstErrorId ?? "phone";
    } else if (!String(inputPhone).toLowerCase().match(phoneRegEx)) {
      setPhoneError("Teléfono inválido");
      firstErrorId = firstErrorId ?? "phone";
    } else {
      setPhoneError("");
    }

    return firstErrorId;
  };

  // Funcion del submit del form: valida campos obligatorios, scrollea al primer error, o envia el mail
  const sendEmail = (e) => {
    e.preventDefault();

    const firstErrorId = validateRequiredFields();

    if (firstErrorId) {
      const field = document.getElementById(firstErrorId);
      field?.scrollIntoView({ behavior: "smooth", block: "center" });
      field?.focus({ preventScroll: true });
      return;
    }

    emailjs
      .sendForm("service_o5glebh", "template_jvvd64c", form.current, {
        publicKey: "_VWXs5_aO3Qmh3PDl",
      })
      .then(
        () => {
          resetFormValues();
          toastInquiry();
        },
        (error) => {
          console.error("FAILED...", error);
          toastInquiryError();
        }
      );
  };

  const toastInquiry = () =>
    toast.success("Consulta enviada correctamente", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: <BsCheckSquareFill className="text-success" />,
    });

  const toastInquiryError = () =>
    toast.error(
      "No se pudo enviar la consulta. Por favor comuníquese por WhatsApp al +54 9 11 2265-3526.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      }
    );

  const resetFormValues = () => {
    setInputName("");
    setInputPhone("");
    setInputEmail("");
    setInputInquiry("");
    setInputMessage("");
    setNameError("");
    setPhoneError("");
    setEmailError("");
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    localStorage.removeItem("email");
    localStorage.removeItem("inquiry");
    localStorage.removeItem("message");
    form.current.reset();
  };

  return (
    <main>
      <Helmet>
        <title>Contacto | Lic. Juan Pablo Sanjorge</title>
        <meta name="title" content="Contactar a Juan Pablo Sanjorge" />
        <meta
          name="description"
          content="Juan Pablo Sanjorge, licenciado en psicología (UBA). Teléfono: +54 9 11 2265-3526 mail: jpsanjorge@gmail.com"
        />
        <link
          rel="canonical"
          href="https://psicologosanjorge.com.ar/contact"
        />
        <meta
          property="og:title"
          content="Contacto | Lic. Juan Pablo Sanjorge"
        />
        <meta
          property="og:description"
          content="Escribime para coordinar tu primera entrevista sin cargo."
        />
        <meta
          property="og:url"
          content="https://psicologosanjorge.com.ar/contact"
        />
      </Helmet>

      <section className="contact-hero">
        <div className="container-fluid">
          <div className="row g-4 g-lg-5 justify-content-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <Reveal className="card-surface">
                <div className="d-flex align-items-center justify-content-center flex-wrap-reverse gap-2 row-gap-3 mb-4">
                  <h1 className="section-title mb-0 me-auto">Contacto</h1>
                  <span className="badge-pill badge-pill-lg weight700">
                    Primera entrevista sin cargo
                  </span>
                </div>

                <form
                  className="contact-form"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <label className="form-label" htmlFor="name">
                    Nombre <span className="required-dot">•</span>
                  </label>
                  <input
                    id="name"
                    className="form-control-pill"
                    name="user_name"
                    onChange={(e) => {
                      storeInputName(e.target.value);
                      if (e.target.value.trim() !== "") setNameError("");
                    }}
                    onBlur={(e) => storeInputName(e.target.value)}
                    defaultValue={inputName}
                  />
                  <div className="form-error">{nameError}</div>

                  <label className="form-label mt-2" htmlFor="email">
                    Correo electrónico <span className="required-dot">•</span>
                  </label>
                  <input
                    id="email"
                    className="form-control-pill"
                    name="user_email"
                    onChange={(e) => {
                      storeInputEmail(e.target.value);
                      setEmailError("");
                    }}
                    onBlur={(e) => {
                      validateEmail(e.target.value);
                      storeInputEmail(e.target.value);
                    }}
                    defaultValue={inputEmail}
                  />
                  <div className="form-error">{emailError}</div>

                  <label className="form-label mt-2" htmlFor="phone">
                    Teléfono <span className="required-dot">•</span>
                  </label>
                  <input
                    id="phone"
                    className="form-control-pill"
                    name="user_phone"
                    onChange={(e) => {
                      validatePhone(e.target.value);
                      storeInputPhone(e.target.value);
                    }}
                    onBlur={(e) => {
                      validatePhone(e.target.value);
                      storeInputPhone(e.target.value);
                    }}
                    defaultValue={inputPhone}
                  />
                  <div className="form-error">{phoneError}</div>

                  <label className="form-label mt-2" htmlFor="inquiry">
                    Motivo de consulta
                  </label>
                  <textarea
                    id="inquiry"
                    className="form-control-pill no-resize mb-3"
                    name="user_inquiry"
                    onChange={(e) => storeInputInquiry(e.target.value)}
                    onBlur={(e) => storeInputInquiry(e.target.value)}
                    defaultValue={inputInquiry}
                  />

                  <label className="form-label" htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="form-control-pill no-resize contact-textarea"
                    name="message"
                    onChange={(e) => storeInputMessage(e.target.value)}
                    onBlur={(e) => storeInputMessage(e.target.value)}
                    defaultValue={inputMessage}
                  />

                  <button
                    className="btn-pill btn-pill-primary mt-4 align-self-start"
                    type="submit"
                  >
                    Enviar consulta
                  </button>
                </form>
              </Reveal>
            </div>

            <div className="col-12 col-lg-5">
              <Reveal delay={0.15} className="card-surface">
                <h2 className="section-title mb-4">Modalidad</h2>
                <ul className="info-list mb-4">
                  <li>Sesiones a distancia (exclusivamente online)</li>
                </ul>

                <dl className="operational-info">
                  <div>
                    <dt>Pago</dt>
                    <dd>Transferencia bancaria.</dd>
                  </div>
                  <div>
                    <dt>Horarios</dt>
                    <dd>
                      Mañana y tarde, hasta las 20 h. Si no podés sostener un
                      horario fijo todas las semanas, se puede coordinar una
                      modalidad flexible.
                    </dd>
                  </div>
                  <div>
                    <dt>Cancelaciones</dt>
                    <dd>
                      Con un mínimo de 24 horas de anticipación. Pasado ese
                      plazo, la sesión se abona igual.
                    </dd>
                  </div>
                </dl>

                <hr className="contact-divider" />

                <div className="d-flex flex-column gap-3 align-items-start">
                  <a
                    className="btn-pill btn-pill-outline"
                    href="https://wa.link/7staf4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsWhatsapp /> +54 9 11 2265-3526
                  </a>
                  <a
                    className="btn-pill btn-pill-outline"
                    href="https://www.instagram.com/juanpablosanjorge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram /> juanpablosanjorge
                  </a>
                  <a
                    className="btn-pill btn-pill-outline"
                    href="mailto:jpsanjorge@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFillEnvelopeFill /> jpsanjorge@gmail.com
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
