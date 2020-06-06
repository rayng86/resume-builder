import React from 'react';
import { TextFieldWrapperProps } from '../types';
import { TextField } from 'react-md';

export const TextFieldWrapper = ({ label, value, func }: TextFieldWrapperProps) => (
  <TextField
    label={label}
    lineDirection="center"
    className="md-cell md-cell--bottom"
    value={value}
    onChange={(value) => func(value)}
  />
);
