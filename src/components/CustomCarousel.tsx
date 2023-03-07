import * as React from "react";
import { styles } from "../styles/CustomCarousel.css";
import Card from "./Card";

export const CustomCarousel = () => {
  const [startX, setStartX] = React.useState<number>(0);
  const [isDragging, setIsDragging] = React.useState<boolean>(false);

  const cardWrapperRef = React.useRef<HTMLDivElement>(null);
  const handleMouseDown = (event: React.MouseEvent) => {
    if (cardWrapperRef.current) {
      event.preventDefault();
      setIsDragging(true);
      setStartX(event.pageX - cardWrapperRef.current?.offsetLeft);
    }
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!isDragging) return;
    if (cardWrapperRef.current) {
      const x = event.pageX - cardWrapperRef.current?.offsetLeft;
      const walk = (x - startX) / 150; //adjust drag speed here
      cardWrapperRef.current.scrollLeft -= walk;
    }
  };
  const images = [
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x300",
  ];
  return (
    <div
      className={styles.carouselContainer}
      ref={cardWrapperRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {images.map((image, index) => (
        <Card key={index} image={image} isTrending={true}/>
      ))}
    </div>
  );
};

export default CustomCarousel;
