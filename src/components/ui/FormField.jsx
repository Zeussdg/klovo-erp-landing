import React from 'react';
import { ChevronDown } from 'lucide-react';
import './FormField.css';

export default function FormField({
  label,
  hint,
  suffix,
  as = 'input',
  id,
  className = '',
  options = [],
  children,
  ...props
}) {
  const fieldId = id || `field-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  const renderControl = () => {
    if (children) {
      return React.cloneElement(children, {
        id: fieldId,
        className: `form-control ${children.props.className || ''}`.trim(),
      });
    }

    if (as === 'select') {
      return (
        <div className="form-control-wrapper form-control-wrapper--select">
          <select id={fieldId} className="form-control form-control--select" {...props}>
            {options.map((opt) => {
              const value = typeof opt === 'object' ? opt.value : opt;
              const labelText = typeof opt === 'object' ? opt.label : opt;
              return (
                <option key={value} value={value}>
                  {labelText}
                </option>
              );
            })}
          </select>
          <ChevronDown size={16} className="form-control-chevron" aria-hidden />
        </div>
      );
    }

    if (suffix) {
      return (
        <div className="form-control-wrapper form-control-wrapper--suffix">
          <input id={fieldId} className="form-control" {...props} />
          <span className="form-control-suffix">{suffix}</span>
        </div>
      );
    }

    return <input id={fieldId} className="form-control" {...props} />;
  };

  return (
    <div className={`form-field ${className}`.trim()}>
      {label && (
        <label htmlFor={fieldId} className="form-field-label">
          {label}
        </label>
      )}
      {renderControl()}
      {hint && <span className="form-field-hint">{hint}</span>}
    </div>
  );
}
