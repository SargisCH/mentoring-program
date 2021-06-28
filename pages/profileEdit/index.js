import { useSelector } from 'react-redux';
import ProfileFilling from '../../components/ProfileFilling/ProfileFilling';
import authenticatedRoute from '../../hocs/authenticatedRoute';

export default authenticatedRoute(() => {
  const user = useSelector((state) => state.user);
  return (
    <ProfileFilling user={user} />
  );
});
