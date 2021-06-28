import { useState } from 'react';
import * as yup from 'yup';
import DepartmentSelect from '../DepartmentSelect/DepartmentSelect';
import Input from '../Input/Input';
import { buildJobInformationInitialState } from './profile-filling-helper';
import Button from '../Button/Button';

const JobInformationSchema = yup.object().shape({
  department: yup.string().required(),
  jobTitle: yup.string().required(),
});
export default function JobInformation({ onSubmit: submit, jobData = {} }) {
  const [state, setState] = useState(buildJobInformationInitialState(jobData));
  const onChange = ({ target }) => setState((prevState) => ({
    ...prevState, [target.name]: target.value,
  }));
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = JobInformationSchema.isValidSync(state);
    if (!isValid) return;
    submit(state);
  };
  return (
    <div className="shadow-md overflow-hidden sm:rounded-md bg-gray-100">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div>
          <form onSubmit={onSubmit}>
            <div className="col-span-6 sm:col-span-3">
              <DepartmentSelect
                onChange={onChange}
                label="Departments"
                value={state.department}
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                type="text"
                name="jobTitle"
                label="Job Title"
                required
                onChange={onChange}
                value={state.jobTitle}
              />
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Button>
                Next: Choose Mentor
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
