export const buildUserInformationInitialState = (defaultValues = {}) => ({
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  city: '',
  gender: '',
  id: '',
  ...defaultValues,
});

export const buildJobInformationInitialState = (defaultValues = {}) => ({
  jogTitle: '',
  department: '',
  ...defaultValues,
});

export const buildMentorListInitialState = (defaultValues = {}) => ({
  mentors: [],
  ...defaultValues,
});

export const buildProfileInitialState = (defaultValues = {}) => ({

  ...buildUserInformationInitialState(),
  ...buildJobInformationInitialState(),
  ...buildMentorListInitialState(),
  ...defaultValues,
});

export const GENDER_SELECT_OPTIONS = [{
  label: 'Male',
  value: 'male',
}, {
  label: 'Female',
  value: 'female',
}, {
  label: 'Other',
  value: 'other',
}];
