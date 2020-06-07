import React, { useState } from 'react';
import { EditHeaderProfileProps, HeaderProfileProps } from './types';
import { Grid, Cell, ExpansionPanel, ExpansionList } from 'react-md';
import { TextFieldWrapper } from './Components/TextFieldWrapper';
import { ResumePreview } from './Components/ResumePreviewComponent';
import { INITIAL_VALUES } from './constants';
import { RenderResumeConfig } from './RenderResumeConfigProps';
import { EditSkills } from './Components/EditSkills';

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
}: HeaderProfileProps & EditHeaderProfileProps) => {
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

const Main = () => {
  const [firstName, setFirstNameState] = useState<string>(INITIAL_VALUES.firstName);
  const [middleName, setMiddleName] = useState<string>(INITIAL_VALUES.middleName);
  const [lastName, setLastName] = useState<string>(INITIAL_VALUES.lastName);
  const [jobTitle, setJobTitle] = useState<string>(INITIAL_VALUES.jobTitle);
  const [skills, setSkills] = useState<Array<{ name: string }>>(INITIAL_VALUES.skills);
  const resumeConfig = ({ firstName, middleName, lastName, jobTitle, skills });
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
        <EditSkills skills={skills} setSkills={setSkills} />
      </Cell>
      <Cell size={8}>
        <ResumePreview
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          jobTitle={jobTitle}
          skills={skills}
        />
        <RenderResumeConfig config={resumeConfig} />
      </Cell>
    </Grid>
  );
};

export default Main;
  