import React from 'react';

export function RadioGroup({ children, value, onValueChange, className }) {
  return (
    <div className={className} onChange={(e) => onValueChange(e.target.value)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { checked: child.props.value === value })
      )}
    </div>
  );
}

export function RadioGroupItem({ value, id, className }) {
  return <input type="radio" id={id} value={value} className={className} />;
}
