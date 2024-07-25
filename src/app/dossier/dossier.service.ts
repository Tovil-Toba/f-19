import { Injectable } from '@angular/core';

import { FIRST_NAMES } from './first-names';
import { LAST_NAMES } from './last-names';

// todo: перенести в pilot-service или person-service
@Injectable({
  providedIn: 'root',
})
export class DossierService {
  readonly firstName = this.getRandomFirstName();
  readonly lastName = this.getRandomLastName();

  getRandomFirstName(): string {
    const random = Math.floor(Math.random() * FIRST_NAMES.length);

    return FIRST_NAMES[random];
  }

  getRandomLastName(): string {
    const random = Math.floor(Math.random() * LAST_NAMES.length);

    return LAST_NAMES[random];
  }
}
