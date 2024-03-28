import React, { useEffect, useState } from 'react';
import './Carousel.css';
import HandleTouch from '../../helpers/handle-touch';
import { calculateAbsoluteIndex } from '../../helpers/calculate-absolute-index';
import CarouselBlock from '../CarouselBlock/CarouselBlock';

const Carousel = ({ items, desktopSlides, tabletSlides, mobileSlides }) => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [touchController, setTouchController] = useState(null);
  const [carouselIndexes, setCarouselIndexes] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesToShow, setImagesToShow] = useState(new Array(desktopSlides).fill());


  function handleWheel(event) {
    setScrollAmount((prevIndex) => prevIndex + (event.deltaY / 100));
  };

  function handleTouchEnd(deltaX) {
    if(deltaX < -100) setScrollAmount((prevIndex) => prevIndex + 1);
    if(deltaX > 100) setScrollAmount((prevIndex) => prevIndex - 1);
  }

  useEffect(() => {
    setCarouselIndexes(imagesToShow.map((_, i) => (
      calculateAbsoluteIndex(scrollAmount + i, items)
    )));
  }, [scrollAmount, items])

  useEffect(() => {
    if(!touchController) setTouchController(new HandleTouch({
      onTouchEnd: handleTouchEnd
    }))

    const screenWidth = window.innerWidth;

    if (screenWidth <= 1350) setIsMobile(true);
    else setIsMobile(false);

    if (screenWidth >= 1350) setImagesToShow(new Array(desktopSlides).fill())
    else if (screenWidth >= 950) setImagesToShow(new Array(tabletSlides).fill())
    else setImagesToShow(new Array(mobileSlides).fill())
  }, [])

  return (
    <div
      className="container"
      onWheel={(e) => !isMobile && handleWheel(e)}
      onTouchStart={(e) => touchController.handleTouchStart(e)}
      onTouchEnd={() => touchController.handleTouchEnd()}
      onTouchMove={(e) => touchController.handleTouchMove(e)}
    >
      {items ? (
        carouselIndexes.map((character, index) => (
          <CarouselBlock key={index} character={items[character]} />
        ))
      ) : (
        <p className='loading'>Loading...</p>
      )}
    </div>
  );
};

export default Carousel;
