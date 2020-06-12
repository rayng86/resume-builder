import React, { useState, useRef } from 'react';
import { Grid, Cell, CardText, Card, CardTitle, Button } from 'react-md';
import { PDFExport } from '@progress/kendo-react-pdf';
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
  
  let resume = useRef();
  const pdfFileName = `${firstName} ${lastName} Resume.pdf` 
  
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

  const download = () => {
    var element = document.createElement('a');
    const jsonObjStr = JSON.stringify(resumeConfig, null, ' ');
    const d = new Date();
    const dateStr = `${d.getDay()}-${d.getDate()}-${d.getFullYear()}`;
    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonObjStr));
    element.setAttribute('download', `my-resume-${dateStr}.json`);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  };

  const exportPDF = () => {
    //@ts-ignore
    resume.save();
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
        <RenderResumeConfig config={resumeConfig} />
        <Button flat primary onClick={exportPDF}>Save PDF</Button>
        <Button flat primary onClick={download}>Save JSON Config</Button>
      </Cell>
      <Cell size={8}>
        <div style={{ border: '1px solid lightgrey', background: 'white', width: '816px', height: '1056px', margin: '0 auto' }}>
          <PDFExport paperSize={'Letter'}
            fileName={pdfFileName}
            title=""
            subject=""
            keywords="resume"
            ref={(r: any) => resume = r}>
                <div style={{
                    height: '100%',
                    width: '100%',
                    padding: 'none',
                    fontFamily: 'Helvetica; san-serif',
                    backgroundColor: 'white',
                    margin: 'auto',
                    overflowX: 'hidden',
                    overflowY: 'hidden'}}>
                      <ResumePreview
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        jobTitle={jobTitle}
                        skills={skills}
                        professionalExperiences={professionalExperiences}
                      />
                </div>
          </PDFExport>
        </div>
      </Cell>
    </Grid>
  );
};

export default Main;
  