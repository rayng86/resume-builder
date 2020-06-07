
export type EditHeaderProfileProps = {
  setFirstNameState: Function,
  setMiddleName: Function,
  setLastName: Function,
  setJobTitle: Function,
};
  
export type HeaderProfileProps = {
  firstName: string,
  middleName: string,
  lastName: string,
  jobTitle: string,
};

export type SkillsType = { name: string };

export type SkillsProps = {
  skills: Array<SkillsType>,
}

export type ResumeProps = HeaderProfileProps & SkillsProps;
  
export type TextFieldWrapperProps = {
  value: string,
  func: Function,
  label: string,
};

export type EditSkillsProps = {
  skills: Array<SkillsType>,
  setSkills: (val: Array<SkillsType>) => void,
};

export type SkillsChipProps = {
  skill: SkillsType,
  onClick: (val: SkillsType) => void
};

export type ResumeSkillsComponentProps = {
  skills: Array<SkillsType>,
};