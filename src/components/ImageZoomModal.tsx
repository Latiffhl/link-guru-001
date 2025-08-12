import React from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const [zoomLevel, setZoomLevel] = React.useState(1);

  React.useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg">
        {/* Controls */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button
            onClick={handleZoomOut}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomIn}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Zoom level indicator */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          {Math.round(zoomLevel * 100)}%
        </div>

        {/* Image container */}
        <div className="overflow-auto max-w-[90vw] max-h-[90vh]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="transition-transform duration-200 cursor-move"
            style={{ 
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageZoomModal;