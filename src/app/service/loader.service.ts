import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  displayLoader = false

  constructor() {
  }

  loader(display: boolean) {
    setTimeout(()=>{
      this.displayLoader = display;
    }, 0);
  }
}
