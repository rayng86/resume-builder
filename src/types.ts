
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
};

export type ProfessionalExperienceType = {
  jobPosition: string,
  company: string,
  startDate: string,
  endDate?: string,
  description: string,
};

export type ProfessionalExperienceProps = {
  professionalExperiences: Array<ProfessionalExperienceType>,
};

export type ResumeProps = HeaderProfileProps & SkillsProps & ProfessionalExperienceProps;
  
export type TextFieldWrapperProps = {
  style?: {},
  value: string,
  func: Function,
  label: string,
};

export type DatePickerWrapperProps = {
  id: string,
  label: string,
  onChange: (formattedDate: string, date: Date, event: Event) => void,
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

export type EditProfessionalExperienceProps = {
  myExperienceList: Array<ProfessionalExperienceType>,
  removeExperience: Function,
  addExperience: Function,
  setExperience: Function,
};

export type ExperienceItemProps = {
  exp: ProfessionalExperienceType,
  index: number,
  removeExperience: Function,
  myExperienceListSize: number,
  up: Function,
  down: Function,
};

export type AddExperienceFormProps = {
  addExperience: Function,
};