import {environment} from '../../environments/environment';

export class Urls {
  static baseUrl = environment.apiUrl;

  // Dashboard
  static dashboard = `${Urls.baseUrl}dashboard/`;
}
