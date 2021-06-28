import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { pick, omit } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import UserInformation from './UserInformation';
import JobInformation from './JobInformation';
import MentorList from './MentorList';
import ProfileFillingLayout from '../../layouts/ProfileFillingLayout';
import { buildProfileInitialState } from './profile-filling-helper';
import { signUpThunk, updateProfile } from '../../store/thunks/user';
import { links } from '../../router';

const layoutHeadings = {
  1: {
    header: 'Personal Information',
    secondaryText: 'Use a permanent address where you can receive mail.',
  },
  2: {
    header: 'Job Information',
    secondaryText: 'Choose your department',
  },
  3: {
    header: 'Mentors',
    secondaryText: 'Choose a mentor',
  },
};
const extractJobProperties = (userData) => pick(userData, ['jobTitle', 'department']);
export default function ProfileFilling({ user }) {
  const router = useRouter();
  const [step, setStep] = useState(Number(router.query.step) || 1);
  const [profileData, setProfileData] = useState(buildProfileInitialState(user));
  const userState = useSelector(((state) => state.user));
  const dispatch = useDispatch();
  useEffect(
    () => {
      if (router.query.step) setStep(Number(router.query.step) || 1);
      else setStep(1);
    },
    [router.query.step],
  );
  const incrementStep = () => {
    const nextStep = step + 1;
    const { query } = router;
    query.step = nextStep;
    router.push({ query });
    setStep(step + 1);
  };
  const userInformationSubmit = (userInformationData) => {
    setProfileData((prevState) => ({ ...prevState, ...userInformationData }));
    incrementStep();
  };
  const jobInformationSubmit = (jobInformationData) => {
    setProfileData((prevState) => ({ ...prevState, ...jobInformationData }));
    incrementStep();
  };
  const mentorListSubmit = (mentorsSelected) => {
    const userUpdatedData = { ...profileData, mentors: mentorsSelected };
    setProfileData(userUpdatedData);
    if (!userState.id) {
      dispatch(signUpThunk(userUpdatedData));
    } else {
      dispatch(updateProfile(userUpdatedData));
      router.push(links.profileEditSuccess);
    }
  };
  const stepHeadings = layoutHeadings[step];
  return (
    <ProfileFillingLayout header={stepHeadings.header} secondaryText={stepHeadings.secondaryText}>
      {
      step === 1
        ? <UserInformation onSubmit={userInformationSubmit} userData={omit(profileData, ['jobTitle', 'department', 'mentors'])} />
        : step === 2 ? (
          <JobInformation
            onSubmit={jobInformationSubmit}
            jobData={extractJobProperties(profileData)}
          />
        )
          : step === 3 && (
          <MentorList
            department={profileData.department}
            onSubmit={mentorListSubmit}
            selectedMentors={profileData.mentors}
          />
          )
    }
    </ProfileFillingLayout>
  );
}
