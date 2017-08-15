import reduxifyAuthentication from 'feathers-reduxify-authentication';
import feathersClient from './';

export default reduxifyAuthentication(feathersClient, {isUserAuthorized: (user) => {
  console.log("INSiDE HERE", user);
  return true;
  // return user.isVerified;
}});
