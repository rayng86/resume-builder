import React, { Component } from 'react';
import _ from 'lodash';
import { ExpansionPanel, ExpansionList, Autocomplete, Chip } from 'react-md';
import { PROGRAMMING_LANGUAGES, OTHER, PROGRAMMING_SOFTWARES, FRAMEWORKS } from '../constants';
import { SkillsType, SkillsChipProps, EditSkillsProps } from '../types';

export const SkillsChip = ({ skill, onClick } : SkillsChipProps) => {
  const { name } = skill;
  const handleRemove = () => onClick(skill);
    return (
      <Chip
        onClick={handleRemove}
        removable
        label={name}
      />
    );
};

const consolidatedSkillsSet = _.concat([], PROGRAMMING_LANGUAGES, PROGRAMMING_SOFTWARES, FRAMEWORKS, OTHER);

class SelectSkillsInput extends Component<EditSkillsProps> {
  state = { filteredSkills: consolidatedSkillsSet };

  updateFilteredSkills = (selectedSkills: Array<{}>) => {
    this.setState({
      filteredSkills: consolidatedSkillsSet.filter(skill => selectedSkills.indexOf(skill) === -1),
    });
  };

  addSkill = (_suggestion: string, index: number, matches: Array<SkillsType>) => {
    const state = matches[index];
    const selectedSkills = _.uniqBy([...this.props.skills, state], (skill: SkillsType) => skill.name);
    this.updateFilteredSkills(selectedSkills);
    this.props.setSkills(selectedSkills);
  };

  removeSkill = (skill: SkillsType) => {
    const selectedSkills : Array<SkillsType> = this.props.skills.slice();
    selectedSkills.splice(selectedSkills.indexOf(skill), 1);
    this.updateFilteredSkills(selectedSkills);
    this.props.setSkills(selectedSkills);
  };

  render() {
    const { filteredSkills } = this.state;
    return (
      <div>
        {this.props.skills.map((skill: SkillsType) => (
          <SkillsChip
            key={skill.name}
            skill={skill}
            onClick={this.removeSkill}
          />
        ))}
        <Autocomplete
          label="Select some skills"
          data={filteredSkills}
          dataLabel="name"
          dataValue="name"
          // @ts-ignore
          onAutocomplete={this.addSkill}
          clearOnAutocomplete
          deleteKeys="name"
        />
    </div>
    );
  }
};

export const EditSkills = ({ skills, setSkills }: EditSkillsProps) => (
  <ExpansionList>
    <ExpansionPanel label="Edit Skills" footer={null}>
      <SelectSkillsInput skills={skills} setSkills={setSkills} />
      </ExpansionPanel>
  </ExpansionList>
);