import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  write(logmes: string) {
    console.log(logmes);
  }
  constructor() {}
}
