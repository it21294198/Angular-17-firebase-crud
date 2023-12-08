// src/app/app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideAnimations } from '@angular/platform-browser/animations';
import { firebaseConfig } from '../../environment';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(), 
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ]
};

//  Add 'APP_CONFIG' separately to avoid circular dependency
export const APP_CONFIG = {
  provide: 'APP_CONFIG',
  useValue: appConfig,
};
