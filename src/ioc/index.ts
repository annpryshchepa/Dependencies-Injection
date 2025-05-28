import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import config from '../../config.json';

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer();

  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  ioc.register('config', {
    host: 'localhost',
    port: config.server.port
  });

  return ioc;
};
