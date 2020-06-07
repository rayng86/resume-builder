import React from 'react';
import { ResumeProps } from '../types';
import { Grid, Cell } from 'react-md';
import { HeaderProfile } from '../Main';

export const ResumePreview = ({ ...rest }: ResumeProps) => (
  <div style={{ background: 'white', border: '1px solid lightgrey' }}>
    <Grid className="resume-container">
      <HeaderProfile {...rest} />
      <Cell size={8}>8</Cell>
      <Cell size={4}>4</Cell>
    </Grid>
  </div>
);
