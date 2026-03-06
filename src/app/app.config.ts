import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
   providers: [
    provideRouter(
      routes, 
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', // Enbles the scroll to ID
        scrollPositionRestoration: 'enabled' 
      })
    )
  ]
};
