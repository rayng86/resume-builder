import _ from 'lodash';
import React from 'react';
import { ResumeProps } from '../types';
import { Grid, Cell } from 'react-md';
import { HeaderProfile } from '../Main';
import { ResumeSkillsComponent } from './ResumeSkillsComponent';
import { ResumeSubHeader } from './ResumeSubHeader';

export const ResumePreview = ({ ...rest }: ResumeProps) => (
  <div style={{ background: 'white', border: '1px solid lightgrey' }}>
    <Grid className="resume-container">
      <HeaderProfile {...rest} />
      <Cell size={8}>
        <ResumeSubHeader label="Professional Experience" />
        {_.map(rest.professionalExperiences, (exp) => (
          <div>
            <h3>{exp.jobPosition}</h3>
            <p>{exp.company}</p>
            <p>{exp.startDate} - {exp.endDate ? exp.endDate : 'Present'}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </Cell>
      <Cell size={4}>
        <ResumeSkillsComponent skills={rest.skills} />
      </Cell>
    </Grid>
  </div>
);
