export const getEnvironmentVariables = () => ({
  API_URL: process.env.API_URL,
})
export const getVariable = (variable) => {
  const selectedEnv = getEnvironmentVariables()[variable];
  if(!selectedEnv) throw new Error('Variable doesn\'t exist');
  return selectedEnv;
}