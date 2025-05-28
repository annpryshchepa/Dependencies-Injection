import { HTTP } from './http';
import config from '../../config.json';

export class Users {
  http: HTTP;
  config: any;

  static $inject = ['http', 'config'];

  constructor(http: HTTP) {
    this.http = http;
    this.config = config
  }

  getUsers() {
    return this.http.get(`${this.config.common.api.path}${this.config.common.api.resources.users}`);
  }
}
