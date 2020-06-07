import _ from 'lodash';
import React from 'react';
import { Chip } from 'react-md';
import { ResumeSkillsComponentProps } from './../types';

export const ResumeSkillsComponent = ({ skills }: ResumeSkillsComponentProps) => (
  <div>
    <h2>Skills</h2>
    {_.map(skills, skill => <Chip className="resume-chip" label={skill.name} />)}
  </div>
);
