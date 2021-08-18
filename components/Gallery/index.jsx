import { useState } from "react";
import styled from "styled-components";
import { images } from "./image";
const StyledGallery = styled.section`
  background-color: #d53f41;
  margin-left: -5vw;
  margin-right: -5vw;
  position: relative;

  .gallery_counter {
    position: absolute;
    top: 10%;
    left: 100px;
    z-index: 1;
    mix-blend-mode: difference;
    line-height: 16px;
    color: #dbd8d6;
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 600;
    font-size: 16px;
    display: inline-block;
  }

  .divider {
    content: "";
    background-color: white;
    width: 6.25vw;
    margin: 7px 10px;
    height: 1px;
    display: inline-block;
  }

  .gallery {
    height: 80vh;
    padding: 10vh 0;
    width: 1000%;
    display: flex;
    flex-wrap: nowrap;
  }
`;

const StyledGalleryItem = styled.div`
  aspect-ratio: 16/9;
  height: 100%;
  display: grid;
  grid-template-columns: 20vw 1fr 200px;
  width: 100vw;

  .gallery_item {
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;
  }
  .gallery_info {
    position: absolute;
    bottom: 10%;
    z-index: 1;
    transform: translateX(-20%);
    color: #dbd8d6;

    .gallery_title {
      line-height: 6vw;
      font-family: "Bai Jamjuree";
      font-weight: 600;
      font-size: 6vw;
      margin-bottom: 2vh;
    }
    .gallery_term {
      position: relative;
      line-height: 5vw;
      font-family: "Bodoni Moda";
      color: transparent;
      font-weight: 400;
      font-size: 5vw;
      -webkit-text-stroke: 2px #dbd8d6;
    }
  }

  .gallery_image {
    background-size: cover;
    background-position: center;
    transform-origin: center;
    width: 50%;
    height: 130%;
    margin-left: 30vw;
    will-change: transform;
    transform: scale(1);
  }
`;

const GalleryItem = ({ src, title, term, updateActiveImage, index }) => {
  return (
    <StyledGalleryItem>
      <div />
      <div className="gallery_item">
        <div className="gallery_info">
          <h1 className="gallery_title">{title}</h1>
          <h6 className="gallery_term">{term}</h6>
        </div>
        <div
          className="gallery_image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div />
    </StyledGalleryItem>
  );
};

const Item = images.map((image, index) => {
  return (
    <GalleryItem
      key={index}
      index={index}
      {...image}
      updateActiveImage={(index) => setActiveImage(index + 1)}
    />
  );
});

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <StyledGallery data-scroll-section>
      <div className="gallery">
        <div className="gallery_counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {Item}
      </div>
    </StyledGallery>
  );
};

export default Gallery;
