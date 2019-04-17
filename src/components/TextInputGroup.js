import React from 'react';

const TextInputGroup = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={
          'form-control form-control-lg' + (error ? ' is-invalid' : '')
        }
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
