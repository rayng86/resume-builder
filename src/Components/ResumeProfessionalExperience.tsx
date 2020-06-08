import _ from "lodash";
import React from 'react';
import { FontIcon } from "react-md";
import { ResumeSubHeader } from "./ResumeSubHeader";
import { ProfessionalExperienceType } from '../types';

type ResumeProfessionalExperienceProps = {
  professionalExperiences: Array<ProfessionalExperienceType>,
};

export const ResumeProfessionalExperience = ({ professionalExperiences } : ResumeProfessionalExperienceProps) => (
  <>
    <ResumeSubHeader label="Professional Experience" />
    {_.map(professionalExperiences, (exp) => (
      <div style={{ borderBottom: '1px dashed rgba(117, 117, 117, 0.12)' }}>
        <h3 style={{ marginBottom: 0 }}>{exp.jobPosition}</h3>
        <p>{exp.company}</p>
        <p style={{ display: 'flex' }}>
          <FontIcon>date_range</FontIcon> {exp.startDate} - {exp.endDate ? exp.endDate : 'Present'}
        </p>
        <p>{exp.description}</p>
      </div>
    ))}
  </>
);
