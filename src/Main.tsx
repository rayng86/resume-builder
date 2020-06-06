import React, { useState } from 'react';
import { EditHeaderProfileProps, HeaderProfileProps, ResumeProps } from './types';
import { Grid, Cell, ExpansionPanel, ExpansionList } from 'react-md';
import { TextFieldWrapper } from './Components/TextFieldWrapper';
import { ResumePreviewContainer } from './Components/ResumePreviewComponent';
import { INITIAL_VALUES } from './constants';
import { RenderResumeConfig } from './RenderResumeConfigProps';

export const HeaderProfile = ({ firstName, middleName, lastName, jobTitle } : HeaderProfileProps) => (
  <Cell size={12}>
    <h2>{firstName} {middleName} {lastName}</h2>
    <span>{jobTitle}</span>
  </Cell>
);

const EditHeaderProfile = ({
  firstName,
  setFirstNameState,
  middleName,
  setMiddleName,
  lastName,
  setLastName,
  jobTitle,
  setJobTitle,
}: ResumeProps & EditHeaderProfileProps) => {
  return (
    <ExpansionList>
      <ExpansionPanel label="Edit Full Name and Job Title" footer={null}>
        <TextFieldWrapper label="First Name" value={firstName} func={setFirstNameState} />
        <TextFieldWrapper label="Middle Name" value={middleName} func={setMiddleName} />
        <TextFieldWrapper label="Last Name" value={lastName} func={setLastName} />
        <TextFieldWrapper label="Job Title" value={jobTitle} func={setJobTitle} />
      </ExpansionPanel>
    </ExpansionList>
  );
};

const EditProfessionalExperience = () => {
  return (
    <ExpansionList>
      <ExpansionPanel label="Edit Professional Experience" footer={null}>
        Edit Professional Experience Placeholder
      </ExpansionPanel>
    </ExpansionList>
  );
};

const EditSkills = () => {
  return (
    <ExpansionList>
      <ExpansionPanel label="Edit Skills" footer={null}>
        Edit Skills Placeholder
      </ExpansionPanel>
    </ExpansionList>
  );
};

const Main = () => {
  const [firstName, setFirstNameState] = useState<string>(INITIAL_VALUES.firstName);
  const [middleName, setMiddleName] = useState<string>(INITIAL_VALUES.middleName);
  const [lastName, setLastName] = useState<string>(INITIAL_VALUES.lastName);
  const [jobTitle, setJobTitle] = useState<string>(INITIAL_VALUES.jobTitle);
  const resumeConfig = ({ firstName, middleName, lastName, jobTitle });
  return (
    <Grid>
      <Cell size={4}>
        <EditHeaderProfile
          firstName={firstName}
          setFirstNameState={setFirstNameState}
          middleName={middleName}
          setMiddleName={setMiddleName}
          lastName={lastName}
          setLastName={setLastName}
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
        />
        <EditProfessionalExperience />
        <EditSkills />
      </Cell>
      <Cell size={8}>
        <ResumePreviewContainer
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          jobTitle={jobTitle}
        />
        <RenderResumeConfig config={resumeConfig} />
      </Cell>
    </Grid>
  );
};

export default Main;
  