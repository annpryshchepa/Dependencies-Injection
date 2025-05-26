import { ILogger, IConfig } from 'src/types';

export class HTTP {
  logger: ILogger;
  config: IConfig;

  static $inject = ['logger', 'config'];

  constructor(logger: ILogger, config: IConfig) {
    this.logger = logger;
    this.config = config;
  }

  async get(url: string) {
    const response = await fetch(`${this.config.host}:${this.config.port}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
