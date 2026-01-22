import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-orange hover:bg-orange-600 focus:ring-brand-orange shadow-md hover:shadow-lg",
    secondary: "border-transparent text-white bg-brand-blue hover:bg-blue-700 focus:ring-brand-blue shadow-md hover:shadow-lg",
    outline: "border-brand-blue text-brand-blue bg-white hover:bg-brand-lightBlue focus:ring-brand-blue",
    ghost: "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};