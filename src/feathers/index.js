import superagent from 'superagent';
import feathers, { rest, hooks } from 'feathers-client';
import config from './config';
import { AsyncStorage } from 'react-native';
import authentication from 'feathers-authentication-client';

const host = `${config.apiProtocol}://${config.apiHost}:${config.apiPort}`;
const client = feathers();

client.configure(hooks())
   .configure(rest(host).superagent(superagent))
  .configure(authentication({storage: AsyncStorage }));

export default client;
