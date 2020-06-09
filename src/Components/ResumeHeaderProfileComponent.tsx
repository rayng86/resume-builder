import React from 'react';
import { Cell } from 'react-md';
import { HeaderProfileProps } from '../types';

const HeaderProfile = ({ firstName, middleName, lastName, jobTitle } : HeaderProfileProps) => (
  <Cell size={12}>
    <h1>{firstName} {middleName} {lastName}</h1>
    <span>{jobTitle}</span>
  </Cell>
);

export default HeaderProfile;
