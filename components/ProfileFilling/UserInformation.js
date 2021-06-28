import React, { useState } from 'react';
import * as yup from 'yup';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { EMAIL_REGEX } from '../../utils/email';
import { buildUserInformationInitialState, GENDER_SELECT_OPTIONS } from './profile-filling-helper';
import Button from '../Button/Button';

const userInformationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  gender: yup.string().required(),
  country: yup.string().required(),
  city: yup.string().required(),
});

export default function UserInformation({ onSubmit: submit, userData }) {
  const [state, setState] = useState(buildUserInformationInitialState({
    ...userData,
    gender: userData.gender || GENDER_SELECT_OPTIONS[0].value,
  }));
  const onChange = ({ target }) => setState((prevState) => ({
    ...prevState, [target.name]: target.value,
  }));
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = userInformationSchema.isValidSync(state);
    if (!isValid) return;
    submit(state);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="shadow-md overflow-hidden sm:rounded-md bg-gray-100">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <Input
                type="text"
                name="firstName"
                label="First name"
                required
                onChange={onChange}
                value={state.firstName}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Input
                type="text"
                name="lastName"
                label="Last name"
                required
                onChange={onChange}
                value={state.lastName}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Input
                type="text"
                name="email"
                label="Email"
                required
                onChange={onChange}
                value={state.email}
                regex={EMAIL_REGEX}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Select
                onChange={onChange}
                options={GENDER_SELECT_OPTIONS}
                label="Gender"
                name="gender"
                value={state.gender}
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                type="text"
                name="country"
                label="Country"
                required
                onChange={onChange}
                value={state.country}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                type="text"
                name="city"
                label="City"
                required
                onChange={onChange}
                value={state.city}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <Button>
            Next: Job Information
          </Button>
        </div>
      </div>
    </form>
  );
}
