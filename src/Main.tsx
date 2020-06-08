import React, { useState } from 'react';
import { EditHeaderProfileProps, HeaderProfileProps } from './types';
import { Grid, Cell, ExpansionPanel, ExpansionList, Button, TextField, List, Subheader, ListItem, FontIcon } from 'react-md';
import { TextFieldWrapper } from './Components/TextFieldWrapper';
import { ResumePreview } from './Components/ResumePreviewComponent';
import { INITIAL_VALUES } from './constants';
import { RenderResumeConfig } from './RenderResumeConfigProps';
import { EditSkills } from './Components/EditSkills';

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
        <TextFieldWrapper label="First Name" value={firstName} func={setFirstNameState} />
        <TextFieldWrapper label="Middle Name" value={middleName} func={setMiddleName} />
        <TextFieldWrapper label="Last Name" value={lastName} func={setLastName} />
        <TextFieldWrapper label="Job Title" value={jobTitle} func={setJobTitle} />
      </ExpansionPanel>
    </ExpansionList>
  );
};

type EditProfessionalExperienceProps = {
  myExperienceList: Array<{}>,
  removeExperience: Function,
  addExperience: Function,
};

const EditProfessionalExperience = ({ myExperienceList, removeExperience, addExperience } : EditProfessionalExperienceProps) => {
  return (
    <ExpansionList>
      <ExpansionPanel label="Edit Professional Experience" footer={null}>
      <List className="md-cell md-paper md-paper--1" style={{ width: '100%'}}>
        <Subheader primaryText="My Jobs" />
        {myExperienceList.map((exp, index) => (
            <ExperienceItem
              key={index}
              index={index}
              exp={exp}
              removeExperience={removeExperience}
            />
        ))}
      </List>
        {/* {JSON.stringify(myExperienceList)} */}
        <AddExperienceForm addExperience={addExperience} />
      </ExpansionPanel>
    </ExpansionList>
  );
};

// @ts-ignore
export const ExperienceItem = ({ exp, index, removeExperience }) => (
  <ListItem
      rightIcon={<FontIcon onClick={() => removeExperience(index)}>close</FontIcon>}
      primaryText={exp.company}
      secondaryText={exp.jobPosition}
  />
);

type AddExperienceFormProps = {
  addExperience: Function,
};

export const AddExperienceForm = ({ addExperience } : AddExperienceFormProps) => {
  const [jobPosition, setJobPosition] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (jobPosition === '' || company === '') return;
    addExperience(jobPosition, company, description);
    setJobPosition('');
    setCompany('');
    setDescription('');
  };

  return (
  <div>
      <TextField
        style={{ width: '100%' }}
        label="Position"
        lineDirection="center"
        className="md-cell md-cell--bottom"
        value={jobPosition}
        // @ts-ignore
        onChange={value => setJobPosition(value)}
      />
      <TextField
        style={{ width: '100%' }}
        label="Company"
        lineDirection="center"
        className="md-cell md-cell--bottom"
        value={company}
        // @ts-ignore
        onChange={value => setCompany(value)}
      />
      <TextField
        style={{ width: '100%' }}
        label="Description"
        lineDirection="center"
        rows={15}
        className="md-cell md-cell--bottom"
        value={description}
        // @ts-ignore
        onChange={value => setDescription(value)}
      />
      <Button flat primary swapTheming onClick={handleSubmit}>Add</Button>
  </div>
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

  const addExperience = (jobPosition: string, company: string, description: string) => {
    const newExperience = [...professionalExperiences, { jobPosition, company, description }];
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
  