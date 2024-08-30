import React from 'react';

const Modal = ({ isVisible, onClose, children, positionRef }) => {
  if (!isVisible) return null;

  return (
    <div
      className="absolute bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg"
      style={{
        top: positionRef.current.offsetTop + positionRef.current.offsetHeight + 10,
        left: positionRef.current.offsetLeft,
        zIndex: 10
      }}
    >
      <button
        className="text-white text-right text-xl"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
