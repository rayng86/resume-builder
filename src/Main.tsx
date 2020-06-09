import React, { useState } from 'react';
import { Grid, Cell, CardText, Card, CardTitle } from 'react-md';
import { ResumePreview } from './Components/ResumePreviewComponent';
import { INITIAL_VALUES } from './constants';
import { RenderResumeConfig } from './RenderResumeConfigProps';
import { EditSkills } from './Components/EditSkills';
import { EditProfessionalExperience } from './Components/EditProfessionalExperience';
import EditHeaderProfile from './Components/EditHeaderProfile';

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
        <Card className="md-block-centered">
          <CardTitle title="Resume Template Builder" subtitle="created by Raymond Ng" />
          <CardText>
            <p>
              a simple tool for laying and building out a resume template.
            </p>
          </CardText>
        </Card>
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
  