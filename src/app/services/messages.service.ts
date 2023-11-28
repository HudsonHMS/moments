import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public message: string = '';

  constructor() { }

  show( message: string ): void {
    this.message = message;
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close( ): void {
    this.message = '';
  }

}
