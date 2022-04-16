import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  title: string | undefined;

  constructor() {
  }

  setTitle(title: string) {
    this.title = title
  }
}
