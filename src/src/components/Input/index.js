import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

export default function Input({ name, label, onChange, ...rest }) {
  const inputRef = useRef(null);
  const { registerField, fieldName, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      
      <input ref={inputRef} name={name} onChange={onChange} defaultValue={defaultValue} {...rest} />

      {error && <span>{error}</span>}
    </>
  );
}