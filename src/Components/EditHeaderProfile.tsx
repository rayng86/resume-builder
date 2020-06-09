import React from 'react';
import { HeaderProfileProps, EditHeaderProfileProps } from '../types';
import { ExpansionList, ExpansionPanel, Grid } from 'react-md';
import { TextFieldWrapper } from './Wrappers';

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

export default EditHeaderProfile;
