import request from '../request';

export const retrieve = async () => {
  try {
    const {mentors} = await request.get('/mentors');
    return [mentors, null];
  } catch(err){
    return [null, err];
  }
}