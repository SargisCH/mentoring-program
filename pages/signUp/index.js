import router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProfileFilling from '../../components/ProfileFilling/ProfileFilling';
import { links } from '../../router';

export default function SignUp() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.id) router.push(links.signUpSuccess);
  }, [user.id]);
  return (
    <ProfileFilling user={user} />
  );
}
