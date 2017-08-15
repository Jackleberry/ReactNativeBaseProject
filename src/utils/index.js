import { isArray, isEmpty, join, capitalize } from 'lodash';

export const extractError = (err) => {
  if (isArray(err.errors) && !isEmpty(err.errors))
    return capitalize(join(err.errors.map(e => e.message), ", "));
  else if (!isEmpty(err.message))
    return err.message;
  else
    return "Unknown Error";
};
