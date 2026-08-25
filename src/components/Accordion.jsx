import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="accordion-item" key={index}>
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
            >
              <span>{item.pregunta}</span>
              <FiChevronDown
                strokeWidth={3}
                className={`accordion-icon${isOpen ? " accordion-icon-open" : ""}`}
              />
            </button>
            <div
              className="accordion-panel"
              id={`accordion-panel-${index}`}
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="accordion-panel-inner">
                <p>{item.respuesta}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
