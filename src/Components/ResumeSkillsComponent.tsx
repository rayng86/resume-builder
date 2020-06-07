import _ from 'lodash';
import React from 'react';
import { Chip } from 'react-md';
import { ResumeSkillsComponentProps } from './../types';
import { ResumeSubHeader } from './ResumeSubHeader';

export const ResumeSkillsComponent = ({ skills }: ResumeSkillsComponentProps) => (
  <div>
    <ResumeSubHeader label="Skills" />
    <div style={{ marginTop: '10px' }}>
      {_.map(skills, skill => <Chip className="resume-chip" label={skill.name} />)}
    </div>
  </div>
);
