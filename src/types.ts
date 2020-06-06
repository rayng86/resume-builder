
export type EditHeaderProfileProps = {
  setFirstNameState: Function;
  setMiddleName: Function;
  setLastName: Function;
  setJobTitle: Function;
};
  
export type HeaderProfileProps = {
  firstName: string;
  middleName: string;
  lastName: string;
  jobTitle: string;
};
export type ResumeProps = HeaderProfileProps;
  
export type TextFieldWrapperProps = {
  value: string;
  func: Function;
  label: string;
};
