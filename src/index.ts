import { Logger } from './services/logger';
import { createIoCContainer } from './ioc';

import type { User } from './types';

const ioc = createIoCContainer();

const renderUsers = async () => {
  const users = ioc.resolve('users');
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

  ioc.register('apiConfig', config);

  renderUsers();
};

window.onload = (event: Event) => {
  const logger = new Logger();

  logger.info('Page is loaded.');

  app();
};
