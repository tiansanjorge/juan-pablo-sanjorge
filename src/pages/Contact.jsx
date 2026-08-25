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

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [inputPhone, setInputPhone] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputInquiry, setInputInquiry] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [submitError, setSubmitError] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

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
      setName(JSON.parse(storedName));
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

  // Chequeo si el input de phone, name o email estan vacíos y si phoneError y Email error son diferentes a vacío en ese caso desactivo el boton submit del form por medio de la logíca de la siguiente funcion
  useEffect(() => {
    if (
      phone === "" ||
      name === "" ||
      email === "" ||
      phoneError !== "" ||
      emailError !== ""
    ) {
      setSubmitError("Completá los campos obligatorios •");
    } else {
      setSubmitError("");
    }
  }, [phone, email, name, phoneError, emailError]);

  useEffect(() => {
    if (submitError !== "") {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [submitError]);

  // Funcion para validar el valor phone con el RegEx de telefono declarado previamente ("phoneRegEx")
  const validatePhone = (value) => {
    if (value === "") {
      setPhone(value);
      setPhoneError("");
    } else if (String(value).toLowerCase().match(phoneRegEx)) {
      setPhone(value);
      setPhoneError("");
    } else {
      setPhoneError("Teléfono inválido");
    }
  };

  // Funcion para validar el valor email con el RegEx de email declarado previamente ("EmailRegEx")
  const validateEmail = (value) => {
    if (value === "") {
      setEmail(value);
      setEmailError("");
    } else if (String(value).toLowerCase().match(emailRegEx)) {
      setEmail(value);
      setEmailError("");
    } else {
      setEmailError("Correo electrónico inválido");
    }
  };

  // Funcion del submit del form para enviar el mail, visualizar la confirmacion y resetear valores del form
  const sendEmail = (e) => {
    e.preventDefault();

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
    setName("");
    setPhone("");
    setEmail("");
    setInputName("");
    setInputPhone("");
    setInputEmail("");
    setInputInquiry("");
    setInputMessage("");
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
    <main className="topFiller">
      <Helmet>
        <meta name="title" content="Contactar a Juan Pablo Sanjorge" />
        <meta
          name="description"
          content="Juan Pablo Sanjorge, licenciado en psicología (UBA). Teléfono: +54 9 11 2265-3526 mail: jpsanjorge@gmail.com"
        />
      </Helmet>

      <section className="contact-hero py-5">
        <div className="container-fluid">
          <div className="row g-4 g-lg-5 justify-content-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <Reveal className="card-surface">
                <span className="badge-pill mb-3 d-inline-block">
                  Primera entrevista sin cargo
                </span>
                <h1 className="section-title mb-4">Contacto</h1>

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
                    className="form-control-pill mb-3"
                    name="user_name"
                    onChange={(e) => {
                      setName(e.target.value);
                      storeInputName(e.target.value);
                    }}
                    onBlur={(e) => {
                      setName(e.target.value);
                      storeInputName(e.target.value);
                    }}
                    defaultValue={inputName}
                  />

                  <label className="form-label" htmlFor="email">
                    Correo electrónico <span className="required-dot">•</span>
                  </label>
                  <input
                    id="email"
                    className="form-control-pill"
                    name="user_email"
                    onChange={(e) => {
                      validateEmail(e.target.value);
                      storeInputEmail(e.target.value);
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

                  <div className="form-hint mt-3">{submitError}</div>

                  <button
                    className="btn-pill btn-pill-primary mt-4"
                    type="submit"
                    disabled={submitDisabled}
                  >
                    Enviar consulta
                  </button>
                </form>
              </Reveal>
            </div>

            <div className="col-12 col-lg-5">
              <Reveal delay={0.15} className="card-surface h-100">
                <h2 className="section-title mb-4">Modalidad</h2>
                <ul className="info-list mb-4">
                  <li>Sesiones a distancia</li>
                  <li>Sesiones presenciales</li>
                </ul>
                <a className="link-primary d-inline-block mb-4" href="#footer">
                  Consultorio en Olivos (Bs. As.)
                </a>

                <div className="d-flex flex-column gap-3">
                  <a
                    className="link-primary"
                    href="https://wa.link/7staf4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsWhatsapp className="me-2" /> +54 9 11 2265-3526
                  </a>
                  <a
                    className="link-primary"
                    href="https://www.instagram.com/juanpablosanjorge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram className="me-2" /> juanpablosanjorge
                  </a>
                  <a
                    className="link-primary"
                    href="mailto:jpsanjorge@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFillEnvelopeFill className="me-2" />{" "}
                    jpsanjorge@gmail.com
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
