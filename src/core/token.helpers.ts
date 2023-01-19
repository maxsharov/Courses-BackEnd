export const getTokenWithoutBearer = (authorization: string) => {
  console.log('authorization', authorization);
  return authorization.split('Bearer')[1].trim();
};
