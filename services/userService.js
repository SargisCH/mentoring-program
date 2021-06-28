import request from '../request';

export const signUp = async (userData) => {
  try {
    const {user} = await request.post('/signUp', userData);
    return [user, null];
  } catch(err){
    return [null, err];
  }
}
export const updateProfile = async (userData) => {
  try {
    const {user} = await request.post('/updateProfile', userData);
    return [user, null];
  } catch(err){
    return [null, err];
  }
}

export const login = async (userData) => {
  try {
    const {user} = await request.post('/login', userData);
    return [user, null];
  } catch(err){
    return [null, err];
  }
}