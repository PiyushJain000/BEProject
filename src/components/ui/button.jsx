import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button className={`p-2 rounded ${className}`} {...props}>
      {children}
    </button>
  );
}
