import React from 'react';
import { TextFieldWrapperProps, DatePickerWrapperProps } from '../types';
import { TextField, DatePicker } from 'react-md';

export const TextFieldWrapper = ({ style, label, value, func }: TextFieldWrapperProps) => (
  <TextField
    style={style}
    label={label}
    lineDirection="center"
    className="md-cell md-cell--bottom"
    value={value}
    onChange={(value) => func(value)}
  />
);

export const DatePickerWrapper = ({ id, label, onChange } : DatePickerWrapperProps) => (
  <DatePicker
    id={id}
    label={label}
    className="md-cell"
    inline
    onChange={onChange}
  />
);