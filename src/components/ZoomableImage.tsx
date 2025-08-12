import React, { useState } from 'react';
import ImageZoomModal from './ImageZoomModal';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className, style }) => {
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer hover:opacity-90 transition-opacity ${className || ''}`}
        style={style}
        onClick={() => setIsZoomModalOpen(true)}
      />
      <ImageZoomModal
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        imageSrc={src}
        imageAlt={alt}
      />
    </>
  );
};

export default ZoomableImage;