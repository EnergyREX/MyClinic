import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  label: string;
}

const Select = ({ children, label }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Cierre al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative inline-block text-left">
      {/* Botón principal */}
      <button
        onClick={toggleOpen}
        className="inline-flex items-center justify-between w-full px-4 py-2 border rounded-md shadow-sm bg-white dark:bg-neutral-700 text-sm font-medium text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-600 transition"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {/* Lista de opciones */}
      <div
        className={`
          absolute z-20 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 transition-all duration-150 ease-out origin-top
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
        role="listbox"
      >
        {children}
      </div>
    </div>
  );
};

export default Select;
