import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    importProvidersFrom(NgxWebstorageModule.forRoot()),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
