import React, { useState } from 'react';
import { EditHeaderProfileProps, HeaderProfileProps } from './types';
import { Grid, Cell, ExpansionPanel, ExpansionList } from 'react-md';
import { TextFieldWrapper } from './Components/Wrappers';
import { ResumePreview } from './Components/ResumePreviewComponent';
import { INITIAL_VALUES } from './constants';
import { RenderResumeConfig } from './RenderResumeConfigProps';
import { EditSkills } from './Components/EditSkills';
import { EditProfessionalExperience } from './Components/EditProfessionalExperience';

export const HeaderProfile = ({ firstName, middleName, lastName, jobTitle } : HeaderProfileProps) => (
  <Cell size={12}>
    <h1>{firstName} {middleName} {lastName}</h1>
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
        <Grid style={{ padding: 0 }}>
          <TextFieldWrapper label="First Name" value={firstName} func={setFirstNameState} />
          <TextFieldWrapper label="Middle Name" value={middleName} func={setMiddleName} />
          <TextFieldWrapper label="Last Name" value={lastName} func={setLastName} />
          <TextFieldWrapper label="Job Title" value={jobTitle} func={setJobTitle} />
        </Grid>
      </ExpansionPanel>
    </ExpansionList>
  );
};

const Main = () => {
  // react hooks for basic information like name/job title
  const [firstName, setFirstNameState] = useState<string>(INITIAL_VALUES.firstName);
  const [middleName, setMiddleName] = useState<string>(INITIAL_VALUES.middleName);
  const [lastName, setLastName] = useState<string>(INITIAL_VALUES.lastName);
  const [jobTitle, setJobTitle] = useState<string>(INITIAL_VALUES.jobTitle);

  // react hooks for skills
  const [skills, setSkills] = useState<Array<{ name: string }>>(INITIAL_VALUES.skills);

  // react hooks for professional experience
  const [professionalExperiences, setExperiences] = useState(INITIAL_VALUES.professionalExperiences);

  // resume config object
  const resumeConfig = ({ firstName, middleName, lastName, jobTitle, professionalExperiences, skills });

  const addExperience = (jobPosition: string, company: string, startDate: string, endDate: string, description: string) => {
    const newExperience = [...professionalExperiences, { jobPosition, company, startDate, endDate, description }];
    setExperiences(newExperience);
  };
  
  const removeExperience = (index: number) => {
    const updatedJobExperienceList = [...professionalExperiences];
    updatedJobExperienceList.splice(index, 1);
    setExperiences(updatedJobExperienceList);
  };

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
        <EditProfessionalExperience
          addExperience={addExperience}
          removeExperience={removeExperience}
          myExperienceList={professionalExperiences}
          setExperience={setExperiences}
        />
        <EditSkills skills={skills} setSkills={setSkills} />
      </Cell>
      <Cell size={8}>
        <ResumePreview
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          jobTitle={jobTitle}
          skills={skills}
          professionalExperiences={professionalExperiences}
        />
        <RenderResumeConfig config={resumeConfig} />
      </Cell>
    </Grid>
  );
};

export default Main;
  