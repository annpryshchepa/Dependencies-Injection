import { HTTP } from './http';

export class Users {
  http: HTTP;

  static $inject = ['http'];

  constructor(http: HTTP) {
    this.http = http;
  }

  getUsers(userId: string) {
    return this.http.get(`/users/${userId}`);
  }
}
