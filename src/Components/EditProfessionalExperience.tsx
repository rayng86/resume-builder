import _ from 'lodash';
import React, { useState } from 'react';
import arrayMove from 'array-move';
import { ListItem, FontIcon, ExpansionList, ExpansionPanel, List, Subheader, Grid, TextField, Button } from 'react-md';
import { ExperienceItemProps, AddExperienceFormProps, EditProfessionalExperienceProps } from '../types';
import { TextFieldWrapper, DatePickerWrapper } from './Wrappers';

export const EditProfessionalExperience = (
  { myExperienceList, removeExperience, addExperience, setExperience } : EditProfessionalExperienceProps) => {
  const myExperienceListSize = _.size(myExperienceList);

  const up = (index: number) => {
    if (index === 0) return;
    const newList = arrayMove(myExperienceList, index, index - 1);
    setExperience(newList);
  }

  const down = (index: number) => {
    if ((index + 1) === myExperienceListSize) return;
    const newList = arrayMove(myExperienceList, index, index + 1);
    setExperience(newList);
  }

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
              myExperienceListSize={myExperienceListSize }
              removeExperience={removeExperience}
              up={up}
              down={down}
            />
        ))}
      </List>
      </ExpansionPanel>
    </ExpansionList>
  );
};

export const ExperienceItem = ({ exp, index, removeExperience, myExperienceListSize, up, down } : ExperienceItemProps) => {
  const disabledReordering = myExperienceListSize > 1;
  return (
    <ListItem
        rightIcon={<>
          <FontIcon
            secondary
            disabled={!disabledReordering || index === 0}
            forceFontSize
            onClick={() => up(index)}
            >
              arrow_drop_up
          </FontIcon>
          <FontIcon
            secondary
            disabled={!disabledReordering || (index + 1) === myExperienceListSize}
            forceFontSize
            onClick={() => down(index)}
          >
            arrow_drop_down
          </FontIcon>
          <FontIcon
            secondary
            onClick={() => removeExperience(index)}
            >
              close
          </FontIcon>
        </>}
        primaryText={exp.company}
        secondaryText={exp.jobPosition}
    />
  );
};

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
        <TextFieldWrapper style={{ width: '100%' }} label="Position" value={jobPosition} func={setJobPosition} />
        <TextFieldWrapper style={{ width: '100%' }} label="Company" value={company} func={setCompany} />
        <Grid style={{ padding: 0 }}>
          <DatePickerWrapper
            id="start-date"
            label="Start Date"
            onChange={(dateString) => setStartDate(dateString)}
          />
          <DatePickerWrapper
            id="end-date"
            label="End Date"
            onChange={(dateString) => setEndDate(dateString)}
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