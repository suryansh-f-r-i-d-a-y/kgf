import React from 'react';
import './GalleryImage.css'

const GalleryImage = ({image , alt}) => {
    return (
        <>
        <div className="gallery-item">
                <div className="image-wrapper">
                  <img
                    src={image}
                    alt={alt}
                    className="gallery-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <div className="view-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </>
    ) 
}

export default GalleryImage;