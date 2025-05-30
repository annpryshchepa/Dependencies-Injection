import { Logger } from './services/logger';
import { createIoCContainer } from './ioc';

import type { User } from './types';

const renderUsers = async (users: User[]) => {
  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  const ioc = createIoCContainer();
  ioc.register('apiConfig', config);

  const users = ioc.resolve('users');

  renderUsers(users);
};

window.onload = (event: Event) => {
  const logger = new Logger();

  logger.info('Page is loaded.');

  app();
};
