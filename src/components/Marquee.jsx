export const Marquee = ({ items }) => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span className="marquee-item" key={index}>
            {item}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
