import React from 'react';
import { ResumeProps } from '../types';
import { Grid, Cell } from 'react-md';
import { HeaderProfile } from '../Main';
import { ResumeSkillsComponent } from './ResumeSkillsComponent';

export const ResumePreview = ({ ...rest }: ResumeProps) => (
  <div style={{ background: 'white', border: '1px solid lightgrey' }}>
    <Grid className="resume-container">
      <HeaderProfile {...rest} />
      <Cell size={8}>
        <h2>Professional Experience</h2>
      </Cell>
      <Cell size={4}>
        <ResumeSkillsComponent skills={rest.skills} />
      </Cell>
    </Grid>
  </div>
);
