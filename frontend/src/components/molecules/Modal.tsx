import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { X } from 'lucide-react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl p-6 max-w-lg w-full shadow-lg dark:bg-neutral-700 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};


export default Modal;
