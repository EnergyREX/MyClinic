import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { EllipsisVertical } from 'lucide-react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string; // Hacemos opcional className
}

const Dropdown = ({ children, className = '', ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Trigger */}
      <button
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        className="hover:bg-neutral-500 p-2 rounded-md transition-colors"
        {...props}
      >
        <EllipsisVertical className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 z-50 
          transform transition-all duration-150 ease-out origin-top-right p-2 w-auto
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          ${className}
        `}
        role="menu"
      >
        {children}
      </div>
    </div>
  );
};

interface DropdownBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const DropdownBtn = ({ children, className = '', ...props }: DropdownBtnProps) => {
  return (
    <div 
      className={`hover:bg-neutral-500 p-1 rounded-md hover:cursor-pointer ${className}`}
      role="menuitem"
      {...props}
    >
      {children}
    </div>
  );
};

export default Dropdown;
