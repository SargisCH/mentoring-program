import router from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { links } from '../../router';
import { loginThunk } from '../../store/thunks/user';
import { EMAIL_REGEX } from '../../utils/email';

export default function SignIn() {
  const [state, setState] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const user = useSelector((globalState) => globalState.user);
  const onChange = ({ target }) => {
    setState(((prev) => ({ ...prev, [target.name]: target.value })));
  };
  useEffect(() => {
    if (user.id) router.push(links.profilePage);
  }, [user.id]);
  const login = () => {
    dispatch(loginThunk(state));
  };
  return (
    <div className="mt-10">
      <div className="grid justify-items-center">
        <div className="text-center">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Sign In</h3>
          </div>
        </div>
        <div className="mt-5 w-9/12">
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
            <Input
              type="password"
              name="password"
              label="Password"
              required
              onChange={onChange}
              value={state.password}
            />
          </div>
          <Button onClick={login}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
