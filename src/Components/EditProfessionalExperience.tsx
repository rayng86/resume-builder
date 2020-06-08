import React, { useState } from 'react';
import { ListItem, FontIcon, ExpansionList, ExpansionPanel, List, Subheader, Grid, TextField, Button, DatePicker } from 'react-md';
import { ExperienceItemProps, AddExperienceFormProps, EditProfessionalExperienceProps } from '../types';

export const EditProfessionalExperience = ({ myExperienceList, removeExperience, addExperience } : EditProfessionalExperienceProps) => {
  return (
    <ExpansionList>
      <ExpansionPanel label="Edit Professional Experience" footer={null}>
        {/* {JSON.stringify(myExperienceList)} */}
        <AddExperienceForm addExperience={addExperience} />
        <List className="md-cell md-paper md-paper--1" style={{ width: '100%', margin: '20px 0' }}>
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
      </ExpansionPanel>
    </ExpansionList>
  );
};

export const ExperienceItem = ({ exp, index, removeExperience } : ExperienceItemProps) => (
  <ListItem
      rightIcon={<FontIcon onClick={() => removeExperience(index)}>close</FontIcon>}
      primaryText={exp.company}
      secondaryText={exp.jobPosition}
  />
);

export const AddExperienceForm = ({ addExperience } : AddExperienceFormProps) => {
  const [jobPosition, setJobPosition] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (jobPosition === '' || company === '' || startDate === '') return;
    addExperience(jobPosition, company, startDate, endDate, description);
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
        <Grid style={{ padding: 0 }}>
          <DatePicker
            id="start-date"
            label="Start Date"
            className="md-cell"
            inline
            onChange={(dateString, dateObject, event) => setStartDate(dateString)}
          />
          <DatePicker
            id="end-date"
            label="End Date"
            className="md-cell"
            inline
            onChange={(dateString, dateObject, event) => setEndDate(dateString)}
          />
        </Grid>
        <TextField
          style={{ width: '100%' }}
          label="Description"
          lineDirection="center"
          rows={5}
          className="md-cell md-cell--bottom"
          value={description}
          // @ts-ignore
          onChange={value => setDescription(value)}
        />
        <Button flat primary swapTheming onClick={handleSubmit}>Add</Button>
    </div>
  );
};