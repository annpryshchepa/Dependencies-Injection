import { Users } from './services/users';
import { Logger } from './services/logger';
import { createIoCContainer } from './ioc';

import type { User, ApiConfig } from './types';

const renderUsers = async (config: ApiConfig) => {
  const ioc = createIoCContainer();
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

  renderUsers(config.api);
};

window.onload = (event: Event) => {
  const logger = new Logger();

  logger.info('Page is loaded.');

  app();
};
