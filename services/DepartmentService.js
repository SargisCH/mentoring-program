import request from '../request';

export const retrieve = async () => {
  try {
    const {departments} = await request.get('/departments');
    return [departments, null];
  } catch(err){
    return [null, err];
  }
}