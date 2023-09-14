import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus.",
    },
    // Add more slides here...
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <Wrapper>
      <div className="container">
        {/* Your slider content here */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide fade ${index === slideIndex ? "active" : ""}`}
          >
            <img className="slide-image" src={slide.imageSrc} alt={`Slide ${index + 1}`} />
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-desc">{slide.description}</p>
              <a href="#" className="slide-btn">
                button <ion-icon name="arrow-forward-circle"></ion-icon>
              </a>
            </div>
            <div className="slide-number-container">
              <p className="slider-number">{index + 1}</p>
              <hr></hr>
              <p className="slider-number">{totalSlides}</p>
            </div>
          </div>
        ))}

        {/* Next and previous buttons */}
        <div className="slider-nav">
          <a className="slider-nav-btn" onClick={prevSlide}>
            <ion-icon name="caret-back-outline"></ion-icon>
          </a>
          <a className="slider-nav-btn" onClick={nextSlide}>
            <ion-icon name="caret-forward-outline"></ion-icon>
          </a>
        </div>

        {/* The dots/circles */}
        <div className="dot-container">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === slideIndex ? "active" : ""}`}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Your styling here */
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
  text-decoration: none;
}

.slider-container {
  width: 100%;
  position: relative;
}

.slide {
  width: 100%;
  display: none;
}

.slide-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(0.6);
}

.slide-content {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem;
}
.slide-title {
  width: 100%;
  max-width: 50rem;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;
}
.slide-desc {
  width: 100%;
  max-width: 50rem;
  color: lightgray;
  font-size: 1rem;
  font-weight: 300;
}
.slide-btn {
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  transition: ease 0.3s;
}
.slide-btn:hover {
  gap: 1rem;
}

.slide-number-container {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 5;
  font-size: 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: rgba(211, 211, 211, 0.788);
  letter-spacing: 0.2rem;
}
.slide-number-container hr {
  width: 3rem;
  transform: rotate(130deg);
  border-color: rgba(211, 211, 211, 0.788);
}

.slider-nav {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.slider-nav-btn {
  cursor: pointer;
  background-color: rgba(211, 211, 211, 0.226);
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease 0.3s;
}
.slider-nav-btn:hover {
  background-color: white;
  color: black;
}

.dot-container {
  position: absolute;
  bottom: 1rem;
  left: 0;
  z-index: 4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.dot {
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  background-color: rgba(211, 211, 211, 0.226);
  border-radius: 50%;
  display: inline-block;
  transition: ease 0.3s;
}
.active,
.dot:hover {
  background-color: white;
}

.fade {
  animation-name: fade;
  animation-duration: 1s;
}
@keyframes fade {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
}

`;

export default HeroSection;
