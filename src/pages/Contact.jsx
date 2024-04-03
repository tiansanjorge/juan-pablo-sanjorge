import {
  BsWhatsapp,
  BsFillEnvelopeFill,
  BsCheckSquareFill,
  BsAsterisk,
} from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
      setSubmitError("Completa los campos obligatorios •");
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
          console.log("SUCCESS!");
          resetFormValues();
          toastInquiry();
        },
        (error) => {
          console.log("FAILED...", error.text);
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
  };

  return (
    <div className="topFiller">
      <Helmet>
        <meta name="title" content="Contactar a Juan Pablo Sanjorge" />
        <meta
          name="description"
          content="Juan Pablo Sanjorge, licenciado en psicologia (UBA). Telefono: +54 9 11 2265-3526 mail: jpsanjorge@gmail.com"
        />
      </Helmet>
      <div className="container-fluid">
        <div className="row fondoVerdeC">
          {/* Formato XS a SM (360 a 768px) */}
          <div className="col-12 p-0 contacto d-flex d-md-none flex-column">
            <div className="col-11 mx-auto d-flex flex-column azul shadow fondoVerdeC py-3 mt-4">
              <div className="d-flex justify-content-between text-start">
                <div className="col-12 pt-3 pb-1 text-center">
                  <h1 className="verdeO titulo weight600 mb-0 mx-4">
                    PRIMERA ENTREVISTA SIN CARGO
                  </h1>
                </div>
              </div>
              <div>
                <form
                  className="d-flex flex-column justify-content-evenly mx-4 py-3 px-3"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <label className="subtitulo azul mb-1">
                    Nombre <span className="verdeO align-top mt-0">•</span>
                  </label>
                  <input
                    className="subtitulo2 azul px-2 form-control"
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
                  <div className="mt-1"></div>
                  <label className="subtitulo azul mt-2 mb-1">
                    Correo electrónico <span className="verdeO">•</span>
                  </label>
                  <input
                    className="subtitulo2 azul px-2 form-control"
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
                  <div className="rojo subtitulo2 mt-1">{emailError}</div>
                  <label className="subtitulo azul mt-2 mb-1">
                    Teléfono <span className="verdeO">•</span>
                  </label>
                  <input
                    className="subtitulo2 azul px-2 form-control"
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
                  <div className="rojo subtitulo2 mt-1">{phoneError}</div>
                  <label className="subtitulo azul mt-2 mb-1">
                    Motivo de Consulta
                  </label>
                  <textarea
                    className="subtitulo2 azul px-2 form-control no-resize"
                    name="user_inquiry"
                    onChange={(e) => {
                      storeInputInquiry(e.target.value);
                    }}
                    onBlur={(e) => {
                      storeInputInquiry(e.target.value);
                    }}
                    defaultValue={inputInquiry}
                  />
                  <label className="subtitulo azul mt-2 mb-1">Mensaje</label>
                  <textarea
                    className="textareaForm no-resize subtitulo2 azul px-2 form-control"
                    name="message"
                    onChange={(e) => {
                      storeInputMessage(e.target.value);
                    }}
                    onBlur={(e) => {
                      storeInputMessage(e.target.value);
                    }}
                    defaultValue={inputMessage}
                  />
                  <div className="verdeO subtitulo2 mt-3 ">{submitError}</div>
                  <input
                    className="subtitulo botonForm border-0 rounded-3 mt-4 py-1 w-50 mx-auto"
                    type="submit"
                    value="Enviar consulta"
                    disabled={submitDisabled}
                  />
                </form>
              </div>
            </div>

            <div className="col-12">
              <div className="col-11 d-flex flex-column justify-content-between azul mx-auto">
                <div className="col-sm-5 d-flex flex-column justify-content-evenly align-self-end mt-4 mt-sm-5 me-1">
                  <p className="size19">
                    <b>
                      • Sesiones a distancia <br />• Sesiones presenciales
                      <br />
                    </b>
                  </p>
                  <a
                    className="size14 text-decoration-none azul hoverVerdeC ms-3"
                    href="#footer"
                  >
                    Consultorio en Olivos (Bs. As.)
                  </a>
                </div>
                <div className="col-sm-5 d-flex flex-column justify-content-evenly align-self-end mt-4 mt-sm-5 me-1">
                  <a
                    className="text-decoration-none verdeO hoverVerdeC"
                    href="https://wa.link/7staf4"
                    target="_blank"
                  >
                    <BsWhatsapp className="me-2" /> +54 9 11 2265-3526
                  </a>
                  <a
                    className="text-decoration-none verdeO hoverVerdeC mt-2"
                    href="mailto:jpsanjorge@gmail.com"
                    target="_blank"
                  >
                    <BsFillEnvelopeFill className="me-2" /> jpsanjorge@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formato MD o superior (768px en adelante) */}

          <div className="col-12 p-0 contacto d-none d-md-flex flex-column justify-content-evenly">
            <div className="col-7 col-lg-7 col-xl-6 col-xxl-5 offset-xl-1 d-flex flex-column azul">
              <div className="ms-md-4 ms-lg-5 ms-xl-0 fondoVerdeC shadow py-3 mt-4">
                <div className="d-flex justify-content-between text-start">
                  <div className="col-12 fondoVerdeC pt-3 pb-1 text-center">
                    <h1 className="titulo verdeO weight600 mb-0 mx-4">
                      PRIMERA ENTREVISTA SIN CARGO
                    </h1>
                  </div>
                </div>
                <div>
                  <form
                    className="d-flex flex-column justify-content-evenly mx-4 py-3 px-3"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <label className="subtitulo azul mb-1">
                      Nombre <span className="verdeO align-top mt-0">•</span>
                    </label>
                    <input
                      className="subtitulo2 azul px-2 form-control"
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
                    <div className="mt-1"></div>
                    <label className="subtitulo azul mt-2 mb-1">
                      Correo electrónico <span className="verdeO">•</span>
                    </label>
                    <input
                      className="subtitulo2 azul px-2 form-control"
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
                    <div className="rojo subtitulo2 mt-1">{emailError}</div>
                    <label className="subtitulo azul mt-2 mb-1">
                      Teléfono <span className="verdeO">•</span>
                    </label>
                    <input
                      className="subtitulo2 azul px-2 form-control"
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
                    <div className="rojo subtitulo2 mt-1">{phoneError}</div>
                    <label className="subtitulo azul mt-2 mb-1">
                      Motivo de Consulta
                    </label>
                    <textarea
                      className="subtitulo2 azul px-2 form-control no-resize"
                      name="user_inquiry"
                      onChange={(e) => {
                        storeInputInquiry(e.target.value);
                      }}
                      onBlur={(e) => {
                        storeInputInquiry(e.target.value);
                      }}
                      defaultValue={inputInquiry}
                    />
                    <label className="subtitulo azul mt-2 mb-1">Mensaje</label>
                    <textarea
                      className="textareaForm no-resize subtitulo2 azul px-2 form-control"
                      name="message"
                      onChange={(e) => {
                        storeInputMessage(e.target.value);
                      }}
                      onBlur={(e) => {
                        storeInputMessage(e.target.value);
                      }}
                      defaultValue={inputMessage}
                    />
                    <div className="verdeO subtitulo2 mt-3 ">{submitError}</div>
                    <input
                      className="subtitulo botonForm border-0 rounded-3 mt-4 py-1 w-50 mx-auto"
                      type="submit"
                      value="Enviar consulta"
                      disabled={submitDisabled}
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="ms-5 ms-xl-0">
                <div className="col-10 col-lg-9 col-xl-7 col-xxl-6 offset-xl-1  d-flex justify-content-between justify-content-lg-around justify-content-xl-between azul">
                  <div className="d-flex flex-column justify-content-evenly align-self-start ps-3">
                    <h2 className="subtitulo lh-base m-0">
                      <b>
                        • Sesiones a distancia <br />• Sesiones presenciales
                      </b>
                      <br />
                    </h2>
                    <a
                      className="size18 text-decoration-none azul hoverVerdeC ms-3"
                      href="#footer"
                    >
                      Consultorio en Olivos (Bs. As.)
                    </a>
                  </div>
                  <div className="d-flex flex-column justify-content-evenly align-self-start">
                    <a
                      className="subtitulo text-decoration-none verdeO hoverVerdeC"
                      href="https://wa.link/7staf4"
                      target="_blank"
                    >
                      <BsWhatsapp className="me-2" /> +54 9 11 2265-3526
                    </a>
                    <a
                      className="subtitulo text-decoration-none verdeO hoverVerdeC mt-2"
                      href="mailto:jpsanjorge@gmail.com"
                      target="_blank"
                    >
                      <BsFillEnvelopeFill className="me-3" />
                      jpsanjorge@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
