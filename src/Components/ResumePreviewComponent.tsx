import React from 'react';
import { ResumeProps } from '../types';
import { Grid, Cell } from 'react-md';
import { ResumeSkillsComponent } from './ResumeSkillsComponent';
import { ResumeProfessionalExperience } from './ResumeProfessionalExperience';
import HeaderProfile from './ResumeHeaderProfileComponent';

export const ResumePreview = ({ ...rest }: ResumeProps) => (
  <Grid className="resume-container">
    <HeaderProfile {...rest} />
    <Cell size={7}>
      <ResumeProfessionalExperience professionalExperiences={rest.professionalExperiences} />
    </Cell>
    <Cell size={5}>
      <ResumeSkillsComponent skills={rest.skills} />
    </Cell>
  </Grid>
);
