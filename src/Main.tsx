import React, { useState } from 'react';
import { EditHeaderProfileProps, HeaderProfileProps, ResumeProps } from './types';
import { Grid, Cell } from 'react-md';
import { TextFieldWrapper } from './Components/TextFieldWrapper';
import { ResumePreviewContainer } from './Components/ResumePreviewComponent';

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
    <>
      <TextFieldWrapper
        label="First Name"
        value={firstName}
        func={setFirstNameState}
      ></TextFieldWrapper>
      <TextFieldWrapper
        label="Middle Name"
        value={middleName}
        func={setMiddleName}
      />
      <TextFieldWrapper label="Last Name" value={lastName} func={setLastName} />
      <TextFieldWrapper label="Job Title" value={jobTitle} func={setJobTitle} />
    </>
  );
};

const Main = () => {
  const [firstName, setFirstNameState] = useState<string>('Raymond');
  const [middleName, setMiddleName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('Ng');
  const [jobTitle, setJobTitle] = useState<string>('Software Engineer');
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
      </Cell>
      <Cell size={8}>
        <ResumePreviewContainer
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          jobTitle={jobTitle}
        />
      </Cell>
    </Grid>
  );
};

export default Main;
  