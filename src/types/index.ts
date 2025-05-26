export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface IConfig {
  host: string;
  port: number;
}

export interface ILogger {
  info: (msg: string) => void;
  error: (msg: string) => void;

}
