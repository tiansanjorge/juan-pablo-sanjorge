import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getImageUrlBySize = (slide) => {
    if (windowSize >= 1400) {
      return slide.url;
    } 
    if (windowSize >= 1200) {
      return slide.xlurl;
    } 
    if (windowSize >= 992) {
      return slide.lgurl;
    } 
    if (windowSize >= 768) {
      return slide.mdurl;
    }
    if (windowSize >= 576) {
      return slide.smurl;
    }else {
      return slide.xsurl;
    }
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideBackgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${getImageUrlBySize(slides[currentIndex])})`,
  };

  return (
    <div>
      <div className="slider w-100 position-relative">
        <div>
          <div
            className="sliderLeftArrow position-absolute top-50 ms-3 size40 pointer verdeO hoverAmarillo"
            onClick={goToPrevious}
          >
            ❰
          </div>
          <div
            className="sliderRightArrow position-absolute top-50 me-3 size40 pointer verdeO hoverAmarillo"
            onClick={goToNext}
          >
            ❱
          </div>
        </div>

        <Link
          to={slides[currentIndex].href}
          className="text-decoration-none verdeO"
        >
          <div className="w-100 h-100 d-flex flex-column justify-content-end" style={slideBackgroundStyle}>
            <div className="d-flex justify-content-center">
              {slides.map((slide, slideIndex) => (
                <div
                  className={`mx-2 size20 pointer ${
                    slideIndex === currentIndex ? "amarillo" : "hoverAmarillo"
                  }`}
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                >
                  ●
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider;
